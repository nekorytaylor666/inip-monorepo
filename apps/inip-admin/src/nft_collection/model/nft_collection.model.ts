import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NFTCollectionDocument = NFTCollection & Document;

@Schema()
export class NFTCollection {
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
}

export const NFTCollectionSchema = SchemaFactory.createForClass(NFTCollection);
