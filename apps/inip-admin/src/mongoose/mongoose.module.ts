import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TokenSchema } from './token.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Token', schema: TokenSchema, collection: 'INIP' },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongooseSchemasModule {}
