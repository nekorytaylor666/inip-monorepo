import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NFTCollectionEntitySchema } from 'src/nft_collection/model/nft_collection.model';
import { FloorPriceStatsEntitySchema } from 'src/statistics/model/floor_price.model';
import { SellTokenEntitySchema } from 'src/statistics/model/sell_token.model';
import { ListingAdapterSchema } from './listing_metadata.model';

import { TokenSchema } from './token.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Token', schema: TokenSchema },
      { name: 'NFTCollectionEntity', schema: NFTCollectionEntitySchema },
      { name: 'ListingAdapter', schema: ListingAdapterSchema },
      { name: 'SellTokenEntity', schema: SellTokenEntitySchema },
      { name: 'FloorPriceStatsEntity', schema: FloorPriceStatsEntitySchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongooseSchemasModule {}
