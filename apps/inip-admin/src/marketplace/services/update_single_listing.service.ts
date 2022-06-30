import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuctionListing, DirectListing, ThirdwebSDK } from '@thirdweb-dev/sdk';
import { BigNumberish } from 'ethers';
import { Model } from 'mongoose';
import { marketPlaceAddress } from 'src/main';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { NFTCollectionEntity } from 'src/nft_collection/model/nft_collection.model';
import { FloorPriceStatsEntity } from 'src/statistics/model/floor_price.model';

const sdk = new ThirdwebSDK('rinkeby');

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
      const activeListing = await sdk
        .getMarketplace(marketPlaceAddress)
        .getActiveListings({
          tokenContract: __.contractAddress,
        });
      if (!activeListing.length) return;

      await this.nftCollectionModel.findOneAndUpdate(
        {
          address: __.contractAddress,
        },
        {
          $set: {
            floorPrice: activeListing.reduce(
              (preValue, currentValue) =>
                currentValue.buyoutPrice.lt(preValue.buyoutPrice)
                  ? currentValue
                  : preValue,
              activeListing[0],
            ).buyoutPrice,
          },
        },
      );
    } catch (e) {
      console.log(e);
    }
  }
}
