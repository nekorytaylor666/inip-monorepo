import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CurrencyValue, NFTMetadata } from '@thirdweb-dev/sdk';
import { BigNumberish } from 'ethers';
import { INftCollectionMetadata, SellTokenEntityInterface } from '@inip/types';

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

  @Prop({ type: Object })
  tokenId: string;

  @Prop()
  createDate?: Date;

  @Prop({ type: Object })
  tokenMetadata: NFTMetadata;

  @Prop({ type: Object })
  contractMetadata: INftCollectionMetadata;
}

export const SellTokenEntitySchema =
  SchemaFactory.createForClass(SellTokenEntity);
