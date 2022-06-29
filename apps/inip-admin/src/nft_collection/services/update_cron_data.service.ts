import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateNftColectionData {
  // constructor(); // @InjectModel(NFTCollectionEntity.name)
  // private nftCollectionModel: Model<NFTCollectionDocument>,
  // {
  // this.init();
  // }
  // @Interval(300000)
  // async init() {
  // const sdk = new ThirdwebSDK('rinkeby');
  // const _meta = await sdk
  //   .getNFTCollection('0x1C552ebF58F6AEefaC40adf3bfD72647C169F736')
  //   .metadata.get();
  // const allContracts = await sdk.getContractList(
  //   '0x408a8fCF014FB04975985f7b418eb4c5F91B911c',
  // );
  // // sdk.getNFTCollection('0x1C552ebF58F6AEefaC40adf3bfD72647C169F736').metadata;
  // const allNftCollections = await Promise.all(
  //   allContracts
  //     .filter((e) => e.contractType == 'nft-collection')
  //     .map(async (e) => ({ ...e, metadata: await e.metadata() })),
  // );
  // const bulk = this.nftCollectionModel.collection.initializeUnorderedBulkOp();
  // for (const nftCollection of allNftCollections) {
  //   bulk.find({ address: nftCollection.address }).upsert().update({
  //     $set: nftCollection,
  //   });
  // }
  // await bulk.execute();
  // await this.nftCollectionModel.updateMany(
  //   allNftCollections.map((e) => ({
  //     address: e.address,
  //     ...e.metadata,
  //   })),
  //   {},
  //   {},
  // );
  // }
}
