import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import {
  NFTCollectionEntity,
  NFTCollectionEntityDocument,
} from '../model/nft_collection.model';
const sdk = new ThirdwebSDK('rinkeby');

@Injectable()
export class UpdateNftcollection {
  constructor(
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapterDocument>,
    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionModel: Model<NFTCollectionEntityDocument>,
  ) {}

  async updateAllNftCollection(contracts: string[]): Promise<void> {
    const allNftCollections = await Promise.all(
      Array.from(new Set(contracts)).map(async (e) => ({
        address: e,
        metadata:
          (await sdk.getNFTCollection(e).metadata.get()) ??
          (await sdk.getNFTDrop(e).metadata.get()),
      })),
    );

    const bulk = this.nftCollectionModel.collection.initializeUnorderedBulkOp();
    for (const nftCollection of allNftCollections) {
      bulk.find({ address: nftCollection.address }).upsert().update({
        $set: nftCollection,
      });
    }
    if (!bulk.batches.length) return;
    await bulk.execute();
  }
}
