import { NFTCollectionEntity } from 'src/nft_collection/model/nft_collection.model';

export interface PopularCollectionTokenModel {
  _id: string;
  totalSaleAmount: number;
  nftCollectionMetadata: NFTCollectionEntity;
}
