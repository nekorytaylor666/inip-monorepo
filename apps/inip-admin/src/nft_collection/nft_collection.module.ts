import { Module } from '@nestjs/common';
import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
import { MetaDataController } from './controller/metadata.controller';
// import {
// ListingsController,
// NotificationController,
// } from './controller/metadata.controller';
import { GetNftCollectionService } from './services/get_nft_collection.service';
import { UpdateNftColectionData } from './services/update_cron_data.service';
import { UpdateMarketPlaceService } from './services/update_market_place.service';

@Module({
  imports: [MongooseSchemasModule],
  providers: [
    GetNftCollectionService,
    UpdateNftColectionData,
    UpdateMarketPlaceService,
  ],
  controllers: [MetaDataController],
  exports: [],
})
export class NftCollectionModule {}
