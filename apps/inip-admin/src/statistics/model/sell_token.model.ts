import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CurrencyValue } from '@thirdweb-dev/sdk';
import { BigNumberish } from 'ethers';
import { SellTokenEntityInterface } from '@inip/types';

export type SellTokenEntityDocument = SellTokenEntity & Document;

@Schema()
export class SellTokenEntity implements SellTokenEntityInterface {
  @Prop({ type: Object })
  buyoutPrice: BigNumberish; // BigNumberish

  @Prop({
    type: {
      symbol: String,
      value: Object,
      name: String,
      decimals: Number,
      displayValue: String,
    },
  })
  buyoutCurrencyValuePerToken: CurrencyValue;

  @Prop()
  transactionHash: string;

  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  contractAddress: string;

  @Prop()
  tokenId: string;
}

export const SellTokenEntitySchema =
  SchemaFactory.createForClass(SellTokenEntity);
