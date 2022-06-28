import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import { marketPlaceAddress } from 'src/main';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import { UpdateNftcollection } from 'src/nft_collection/services/update_nftcollection.service';

@Injectable()
export class UpdateMarketPlaceService {
  constructor(
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapterDocument>,

    private updateNftcollection: UpdateNftcollection,
  ) {
    this.init();
  }

  async init() {
    const sdk = new ThirdwebSDK('rinkeby');
    const marketplaceContract = sdk.getMarketplace(marketPlaceAddress);

    const listings = await marketplaceContract.getAllListings();
    this.updateNftcollection.updateAllNftCollection(
      listings.map((e) => e.assetContractAddress),
    );

    const bulk =
      this.listingAdapterModel.collection.initializeUnorderedBulkOp();
    for (const listing of listings) {
      bulk
        .find({
          id: listing.id,
          assetContractAddress: listing.assetContractAddress,
        })
        .upsert()
        .update({
          $set: listing,
        });
    }
    if (!bulk.batches.length) return;

    await bulk.execute();
  }
}
