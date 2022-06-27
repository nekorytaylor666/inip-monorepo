import { Module } from '@nestjs/common';
import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
import { SellTokenController } from './controller/sell_token.controller';

@Module({
  imports: [MongooseSchemasModule],
  controllers: [SellTokenController],
})
export class StatiscticModule {}
