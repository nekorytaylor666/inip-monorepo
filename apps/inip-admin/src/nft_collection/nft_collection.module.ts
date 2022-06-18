import { Module } from '@nestjs/common';
import { GetNftCollectionService } from './services/get_nft_collection.service';

// mongodb://INIP:4c1ba9a0-1add-4837-bfae-7fe489f8f37c@localhost:27017/?authMechanism=DEFAULT
@Module({
  providers: [GetNftCollectionService],
})
export class NftCollectionModule {}
