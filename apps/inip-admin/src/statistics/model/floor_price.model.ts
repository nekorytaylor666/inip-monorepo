import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { BigNumberish } from 'ethers';
import { ObjectId, Types } from 'mongoose';

export type FloorPriceStatsEntityDocument = FloorPriceStatsEntity & Document;

export class FloorPriceStatsEntity {
  // @Prop({ type: Types.ObjectId })
  // _id: ObjectId;

  @Prop({ type: Object })
  buyoutPrice: BigNumberish; // BigNumberish

  @Prop()
  contractAddress: string;
}

export const FloorPriceStatsEntitySchema = SchemaFactory.createForClass(
  FloorPriceStatsEntity,
);
