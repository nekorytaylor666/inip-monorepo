import { Module } from '@nestjs/common';
import { MetaDataController } from 'src/metadata/controllers/get.controller';
import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
import { NftCollectionController } from './controller/nft_collection.controller';
import { NftCollectionCheckService } from './services/check_controller.service';
import { NftCollectionFloorPriceService } from './services/get_floor_price.service';
// import { MetaDataController } from './controller/metadata.controller';

import { GetNftCollectionService } from './services/get_nft_collection.service';
import { UpdateNftColectionData } from './services/update_cron_data.service';
import { UpdateNftcollection } from './services/update_nftcollection.service';

@Module({
  imports: [MongooseSchemasModule],
  providers: [
    GetNftCollectionService,
    UpdateNftColectionData,
    UpdateNftcollection,
    NftCollectionFloorPriceService,
    NftCollectionCheckService,
  ],
  controllers: [MetaDataController, NftCollectionController],
  exports: [UpdateNftcollection, NftCollectionCheckService],
})
export class NftCollectionModule {}
