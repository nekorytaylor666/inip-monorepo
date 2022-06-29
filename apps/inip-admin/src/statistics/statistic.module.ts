import { Module } from '@nestjs/common';
import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
import { FlootPriceIntervalController } from './controller/floor_price_interval.controller';
import { SellTokenController } from './controller/sell_token.controller';

@Module({
  imports: [MongooseSchemasModule],
  controllers: [SellTokenController, FlootPriceIntervalController],
})
export class StatiscticModule {}
