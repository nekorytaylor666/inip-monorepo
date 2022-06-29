import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SellTokenEntity,
  SellTokenEntityDocument,
} from '../model/sell_token.model';

@Controller('sell_token')
export class SellTokenController {
  constructor(
    @InjectModel(SellTokenEntity.name)
    private sellTokenEnityModel: Model<SellTokenEntityDocument>,
  ) {}

  @Post('sell')
  async sellToken(
    @Body()
    body: SellTokenEntity,
  ) {
    const check = await this.sellTokenEnityModel.create(body);
    return check;
  }
}
