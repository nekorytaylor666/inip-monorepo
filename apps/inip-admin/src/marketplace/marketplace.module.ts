import { Module } from '@nestjs/common';

import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
// import { NftCollectionController } from 'src/nft_collection/controller/nft_collection.controller';
import { NftCollectionModule } from 'src/nft_collection/nft_collection.module';
import { AddListingController } from './controller/add_listing.controller';
import { UpdateMarketPlaceService } from './services/update_marektplace.service';
import { UpdateSingleListingService } from './services/update_single_listing.service';

@Module({
  imports: [NftCollectionModule, MongooseSchemasModule],
  providers: [UpdateMarketPlaceService, UpdateSingleListingService],
  controllers: [AddListingController],
  exports: [UpdateMarketPlaceService],
})
export class MarketPlaceModule {}
