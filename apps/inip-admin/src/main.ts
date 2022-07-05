import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import * as express from 'express';
import * as http from 'http';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';

export const marketPlaceAddress = '0x5B360DbE1d039B80beEF7dE29EC2B0B832964d1f';

const bootstrap = async () => {
  // AdminJS.registerAdapter(AdminJSMongoose);
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Inip DOC')
    .setDescription('Doc')
    .setVersion('1.0')
    .addTag('INIP')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.init();

  // http.createServer(server).listen(80);
  http.createServer(server).listen(443);
  // await app.listen(80);
  // await app.listen(443);
};
bootstrap();
