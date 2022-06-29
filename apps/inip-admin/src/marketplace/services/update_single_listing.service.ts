import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuctionListing, DirectListing } from '@thirdweb-dev/sdk';
import { BigNumberish } from 'ethers';
import { Model } from 'mongoose';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { NFTCollectionEntity } from 'src/nft_collection/model/nft_collection.model';
import { FloorPriceStatsEntity } from 'src/statistics/model/floor_price.model';

@Injectable()
export class UpdateSingleListingService {
  constructor(
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapter>,

    @InjectModel(FloorPriceStatsEntity.name)
    private floorPriceStatsEntity: Model<FloorPriceStatsEntity>,

    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionModel: Model<NFTCollectionEntity>,
  ) {}

  async updateSingleListing(__: { listing: AuctionListing | DirectListing }) {
    // TODO update listing with mongo and meilisearch
    const { listing } = __;
    await this.listingAdapterModel.findOneAndUpdate(
      {
        tokenId: listing.tokenId,
        assetContractAddress: listing.assetContractAddress,
      },
      listing,
      {
        upsert: true,
      },
    );
  }

  async updateFloorPrice(__: {
    contractAddress: string;
    buyoutPrice: BigNumberish;
  }) {
    try {
      const { contractAddress, buyoutPrice } = __;
      const buyoutObj = {
        buyoutPrice,
        contractAddress,
      };
      await Promise.all([
        this.nftCollectionModel.findOneAndUpdate(
          {
            address: contractAddress,
          },
          {
            $set: {
              floorPrice: buyoutPrice,
            },
          },
        ),
        this.floorPriceStatsEntity.collection.insertOne(buyoutObj),
      ]);
    } catch (e) {
      console.log(e);
    }
  }
}
