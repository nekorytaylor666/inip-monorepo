import { Module } from '@nestjs/common';
import { MarketPlaceModule } from 'src/marketplace/marketplace.module';
import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
import { MetaDataController } from './controllers/get.controller';

@Module({
  imports: [MongooseSchemasModule, MarketPlaceModule],
  controllers: [MetaDataController],
})
export class MetadataModule {}
