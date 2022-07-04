import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { PopularCollectionTokenModel } from '../model/popular_collection_tokens.model';
import { SellTokenEntity } from '../model/sell_token.model';

@Controller()
export class NftStatisticController {
  constructor(
    @InjectModel(SellTokenEntity.name)
    private sellTokenEntityModel: Model<SellTokenEntity>,
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapter>,
  ) {}

  @Get('get_popular')
  async getPopularCollection(): Promise<PopularCollectionTokenModel[]> {
    const cursor =
      this.sellTokenEntityModel.collection.aggregate<PopularCollectionTokenModel>(
        [
          {
            $group: {
              _id: '$contractAddress',
              totalSaleAmount: {
                $sum: 1,
              },
            },
          },
          {
            $sort: {
              totalSaleAmount: -1,
            },
          },
          {
            $limit: 3,
          },
          {
            $lookup: {
              from: 'nftcollectionentities',
              localField: '_id',
              foreignField: 'address',
              as: 'nftCollectionMetadata',
            },
          },
          {
            $addFields: {
              nftCollectionMetadata: {
                $first: '$nftCollectionMetadata',
              },
            },
          },
        ],
      );
    const objs = await cursor.toArray();
    cursor.close();
    return objs;
  }

  @Get('newest_listing')
  async getNewset(): Promise<ListingAdapter[]> {
    return (
      await this.listingAdapterModel.find(
        {},
        {},
        {
          limit: 3,
          sort: {
            _id: -1,
          },
        },
      )
    ).map((e) => e.toObject());
  }
}
