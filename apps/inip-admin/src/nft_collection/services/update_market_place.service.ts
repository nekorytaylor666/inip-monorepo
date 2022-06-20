import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NFTCollection, ThirdwebSDK } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
// import { z } from 'zod';
import { NFTCollectionDocument } from '../model/nft_collection.model';

@Injectable()
export class UpdateMarketPlaceService {
  constructor(
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapterDocument>,
    @InjectModel(NFTCollection.name)
    private nftCollectionModel: Model<NFTCollectionDocument>,
  ) {
    this.init();
  }

  async init() {
    const sdk = new ThirdwebSDK('rinkeby');
    const marketplaceContract = sdk.getMarketplace(
      '0x3662Fff4Ecc063d3Fb1B17A0137896fb4bf3276F',
    );
    // sdk.getContract();
    const listings = await marketplaceContract.getAllListings();
    this.updateAllNftCollection(listings.map((e) => e.assetContractAddress));
    // listings.filter((e) => {
    //   e.buyoutCurrencyValuePerToken.decimals;
    //   return e.type == ListingType.Auction;
    // });
    // listings.map((e) => {});

    // "0x170263bFB594EEEAAa3bFd240386b7B84381E2F3"
    // "0x170263bFB594EEEAAa3bFd240386b7B84381E2F3"
    const bulk =
      this.listingAdapterModel.collection.initializeUnorderedBulkOp();
    for (const listing of listings) {
      bulk
        .find({
          id: listing.id,
        })
        .upsert()
        .update({
          $set: listing,
        });
    }
    await bulk.execute();
    // listins[0].;
  }

  async updateAllNftCollection(contracts: string[]): Promise<void> {
    const sdk = new ThirdwebSDK('rinkeby');
    // const _meta = await sdk
    //   .getNFTCollection('0x1C552ebF58F6AEefaC40adf3bfD72647C169F736')
    //   .metadata.get();
    // console.log(_meta);
    const allContracts = await sdk.getContractList(
      '0x408a8fCF014FB04975985f7b418eb4c5F91B911c',
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
    // allNftCollections[0].description;
    const bulk = this.nftCollectionModel.collection.initializeUnorderedBulkOp();
    for (const nftCollection of allNftCollections) {
      // nftCollection.metadata.description
      bulk.find({ address: nftCollection.address }).upsert().update({
        $set: nftCollection,
      });
    }
    await bulk.execute();
  }
}
