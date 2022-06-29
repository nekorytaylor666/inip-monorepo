import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { INFTCollection } from '@inip/types';
import { BigNumber } from 'ethers';
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
  metadata: {
    description: string;
    image: string;
    external_link: string;
    symbol: string;
    name: string;
    seller_fee_basis_points: number;
    fee_recipient: string;
  };

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
