import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CurrencyValue, ListingType, NFTMetadata } from '@thirdweb-dev/sdk';
import { BigNumberish } from 'ethers';

export type ListingAdapterDocument = ListingAdapter & Document;

@Schema()
export class ListingAdapter {
  @Prop()
  id: string;
  @Prop()
  assetContractAddress: string;
  @Prop({ type: Object })
  tokenId: BigNumberish;
  @Prop({ type: Object })
  startTimeInEpochSeconds: BigNumberish; // BigNumberish
  @Prop({ type: Object })
  endTimeInEpochSeconds: BigNumberish; // BigNumberish
  @Prop({ type: Object })
  quantity: BigNumberish;
  @Prop()
  currencyContractAddress: string;
  @Prop({ type: Object })
  reservePrice: BigNumberish; // BigNumberish
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
  @Prop({
    type: {
      symbol: String,
      value: Object,
      name: String,
      decimals: Number,
      displayValue: String,
    },
  })
  reservePriceCurrencyValuePerToken: CurrencyValue;

  @Prop()
  sellerAddress: string;
  @Prop()
  type: ListingType;
  @Prop({
    type: {
      name: String,
      description: String,
      image: String,
      external_url: String,
      animation_url: String,
      uri: String,
      id: Object,
    },
  })
  asset: NFTMetadata;

  @Prop({ type: Object })
  startTimeInSeconds: BigNumberish;
  @Prop({ type: Object })
  secondsUntilEnd: BigNumberish;
}
export const ListingAdapterSchema =
  SchemaFactory.createForClass(ListingAdapter);
