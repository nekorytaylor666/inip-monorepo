import { NestFactory } from '@nestjs/core';

import AdminJS from 'adminjs';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { AppModule } from './app.module';

const bootstrap = async () => {
  AdminJS.registerAdapter(AdminJSMongoose);
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
};
bootstrap();
