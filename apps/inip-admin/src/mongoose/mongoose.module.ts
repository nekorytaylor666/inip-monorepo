import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NFTCollectionSchema } from 'src/nft_collection/model/nft_collection.model';
import { ListingAdapterSchema } from './listing_metadata.model';

import { TokenSchema } from './token.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Token', schema: TokenSchema },
      { name: 'NFTCollection', schema: NFTCollectionSchema },
      { name: 'ListingAdapter', schema: ListingAdapterSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongooseSchemasModule {}
