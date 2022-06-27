import { Module } from '@nestjs/common';

import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
// import { NftCollectionController } from 'src/nft_collection/controller/nft_collection.controller';
import { NftCollectionModule } from 'src/nft_collection/nft_collection.module';
import { UpdateMarketPlaceService } from './services/update_marektplace.service';

@Module({
  imports: [NftCollectionModule, MongooseSchemasModule],
  providers: [UpdateMarketPlaceService],
  controllers: [],
  exports: [UpdateMarketPlaceService],
})
export class MarketPlaceModule {}
