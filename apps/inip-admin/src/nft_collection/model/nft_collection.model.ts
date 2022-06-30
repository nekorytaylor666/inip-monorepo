import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { INFTCollection } from '@inip/types';
import { BigNumber } from 'ethers';
import { NFTMetadata } from '@thirdweb-dev/sdk';
export type NFTCollectionEntityDocument = NFTCollectionEntity & Document;

@Schema()
export class NFTCollectionEntity implements INFTCollection {
  @Prop()
  address: string;

  @Prop({
    type: {
      description: String,
      image: String,
      external_link: String,
      symbol: String,
      name: String,
      seller_fee_basis_points: Number,
      fee_recipient: String,
    },
  })
  metadata: NFTMetadata;

  @Prop({
    type: {
      type: String,
      hex: String,
    },
  })
  floorPrice?: BigNumber;
}

export const NFTCollectionEntitySchema =
  SchemaFactory.createForClass(NFTCollectionEntity);
