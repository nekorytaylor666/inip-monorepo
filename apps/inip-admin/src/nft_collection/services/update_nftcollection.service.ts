import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NFTCollection, ThirdwebSDK } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import { NFTCollectionDocument } from '../model/nft_collection.model';

@Injectable()
export class UpdateNftcollection {
  constructor(
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapterDocument>,
    @InjectModel(NFTCollection.name)
    private nftCollectionModel: Model<NFTCollectionDocument>,
  ) {}

  async updateAllNftCollection(contracts: string[]): Promise<void> {
    const sdk = new ThirdwebSDK('rinkeby');

    const allContracts = await sdk.getContractList(
      '0xECd384AAaDA62eCeD2f0e2BEc6B803611064fca0',
    );
    const myAllNftCollections = allContracts
      .filter((e) => e.contractType == 'nft-collection')
      .map((e) => e.address);
    const allNftCollectionSet = Array.from(
      new Set<string>([...myAllNftCollections, ...contracts]),
    );
    const collectionPromises = allNftCollectionSet.map(async (e) => {
      return {
        address: e,
        metadata: await sdk.getNFTCollection(e).metadata.get(),
      };
    });
    const allNftCollections = await Promise.all(collectionPromises);

    const bulk = this.nftCollectionModel.collection.initializeUnorderedBulkOp();
    for (const nftCollection of allNftCollections) {
      bulk.find({ address: nftCollection.address }).upsert().update({
        $set: nftCollection,
      });
    }
    await bulk.execute();
  }
}
