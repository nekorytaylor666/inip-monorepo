import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { PopularCollectionTokenModel } from '../model/popular_collection_tokens.model';

@Controller()
export class NftStatisticController {
  constructor(
    @InjectModel(ListingAdapter.name)
    private listingAdapter: Model<ListingAdapter>,
  ) {}

  @Get('get_popular')
  async getPopularCollection(): Promise<PopularCollectionTokenModel[]> {
    return this.listingAdapter.aggregate([
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
            $first: '$doc',
          },
        },
      },
    ]);
  }

  @Get('newest_listing')
  async getNewset(): Promise<ListingAdapter[]> {
    return (
      await this.listingAdapter.find(
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
