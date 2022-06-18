import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { AppService } from './app.service';

import { Token } from './mongoose/token.model';
import { MongooseSchemasModule } from './mongoose/mongoose.module';
import { AdminModule } from '@adminjs/nestjs';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://INIP:4c1ba9a0-1add-4837-bfae-7fe489f8f37c@localhost:27017',
      {
        dbName: 'INIP',
      },
    ),
    AdminModule.createAdminAsync({
      imports: [MongooseSchemasModule],
      inject: [getModelToken('Token')],
      useFactory: (tokenModel: Model<Token>) => ({
        adminJsOptions: {
          rootPath: '/admin',

          resources: [{ resource: tokenModel }],
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
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
