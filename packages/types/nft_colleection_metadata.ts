export interface INftCollectionMetadata {
  [x: string]: any;
  description?: string;
  image?: string;
  external_link?: string;
  symbol: string;
  name: string;
  seller_fee_basis_points: number;
  fee_recipient: string;
}
