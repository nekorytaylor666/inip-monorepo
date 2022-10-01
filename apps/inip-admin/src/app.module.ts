import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { AppService } from './app.service';

import { Token } from './mongoose/token.model';
import { MongooseSchemasModule } from './mongoose/mongoose.module';
// import { AdminModule } from '@adminjs/nestjs';
import { ScheduleModule } from '@nestjs/schedule';
import { NftCollectionModule } from './nft_collection/nft_collection.module';
import { NFTCollectionEntity } from './nft_collection/model/nft_collection.model';
import { ListingAdapter } from './mongoose/listing_metadata.model';
import { MeiliSearchModule } from './meiliSearch/meili_search.module';
import { MetadataModule } from './metadata/metadata.module';
import { MarketPlaceModule } from './marketplace/marketplace.module';
import { StatiscticModule } from './statistics/statistic.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://INIP:4c1ba9a0-1add-4837-bfae-7fe489f8f37c@46.101.212.151:27017/?authMechanism=DEFAULT',
      {
        dbName: 'INIP',
      },
    ),
    // AdminModule.createAdminAsync({
    //   imports: [MongooseSchemasModule],
    //   inject: [
    //     getModelToken('Token'),
    //     getModelToken('NFTCollectionEntity'),
    //     getModelToken('ListingAdapter'),
    //   ],
    //   useFactory: (
    //     tokenModel: Model<Token>,
    //     nftColelctionModel: Model<NFTCollectionEntity>,
    //     listingAdapterModel: Model<ListingAdapter>,
    //   ) => ({
    //     adminJsOptions: {
    //       rootPath: '/admin',

    //       resources: [
    //         { resource: tokenModel },
    //         { resource: nftColelctionModel },
    //         { resource: listingAdapterModel },
    //       ],
    //     },
    //     auth: {
    //       authenticate: async (email, password) =>
    //         email == 'toha' && password == '123456789'
    //           ? Promise.resolve({ email: 'toha' })
    //           : null,
    //       cookieName: 'world12',
    //       cookiePassword: 'testPass',
    //     },
    //   }),
    //   // customLoader: ExpressCustomLoader,
    // }),
    MongooseSchemasModule,
    NftCollectionModule,
    MeiliSearchModule,
    MetadataModule,
    MarketPlaceModule,
    StatiscticModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
