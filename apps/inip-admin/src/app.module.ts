import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { AppService } from './app.service';

import { Token } from './mongoose/token.model';
import { MongooseSchemasModule } from './mongoose/mongoose.module';
import { AdminModule } from '@adminjs/nestjs';
import { ScheduleModule } from '@nestjs/schedule';
import { NftCollectionModule } from './nft_collection/nft_collection.module';
import { NFTCollection } from './nft_collection/model/nft_collection.model';
import { ListingAdapter } from './mongoose/listing_metadata.model';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://INIP:4c1ba9a0-1add-4837-bfae-7fe489f8f37c@68.183.74.222:27017/?authMechanism=DEFAULT',
      {
        dbName: 'INIP',
      },
    ),
    AdminModule.createAdminAsync({
      imports: [MongooseSchemasModule],
      inject: [
        getModelToken('Token'),
        getModelToken('NFTCollection'),
        getModelToken('ListingAdapter'),
      ],
      useFactory: (
        tokenModel: Model<Token>,
        nftColelctionModel: Model<NFTCollection>,
        listingAdapterModel: Model<ListingAdapter>,
      ) => ({
        adminJsOptions: {
          rootPath: '/admin',

          resources: [
            { resource: tokenModel },
            { resource: nftColelctionModel },
            { resource: listingAdapterModel },
          ],
        },
        auth: {
          authenticate: async (email, password) =>
            email == 'toha' && password == '123456789'
              ? Promise.resolve({ email: 'toha PIDR' })
              : null,
          cookieName: 'world12',
          cookiePassword: 'testPass',
        },
      }),
      // customLoader: ExpressCustomLoader,
    }),
    MongooseSchemasModule,
    NftCollectionModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
