import { NestFactory } from '@nestjs/core';

import AdminJS from 'adminjs';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const marketPlaceAddress = '0x5B360DbE1d039B80beEF7dE29EC2B0B832964d1f';

const bootstrap = async () => {
  AdminJS.registerAdapter(AdminJSMongoose);
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Inip DOC')
    .setDescription('Doc')
    .setVersion('1.0')
    .addTag('INIP')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
};
bootstrap();
