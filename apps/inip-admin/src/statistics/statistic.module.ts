import { Module } from '@nestjs/common';
import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
import { NftCollectionModule } from 'src/nft_collection/nft_collection.module';
import { FlootPriceIntervalController } from './controller/floor_price_interval.controller';
import { NftStatisticController } from './controller/nft_collection.controler';
import { SellTokenController } from './controller/sell_token.controller';

@Module({
  imports: [MongooseSchemasModule, NftCollectionModule],
  controllers: [
    SellTokenController,
    FlootPriceIntervalController,
    NftStatisticController,
  ],
})
export class StatiscticModule {}
