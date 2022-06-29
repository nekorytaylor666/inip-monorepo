import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { objectIdWithTimestamp } from 'src/utils/object_id_with_timestamp';
import { FloorPriceStatsEntity } from '../model/floor_price.model';
import { SellTokenEntity } from '../model/sell_token.model';

@Controller()
export class FlootPriceIntervalController {
  constructor(
    @InjectModel(SellTokenEntity.name)
    private sellTokenEntity: Model<SellTokenEntity>,
  ) {}

  @Post('get_sell')
  async getFloorPrices(
    @Body()
    body: {
      startTime: string;
      endTime: string;
      contractAddress: string;
    },
  ) {
    const { contractAddress, endTime: endTime1 } = body;
    const endTime = endTime1 ?? new Date();
    const getAllEll = await Promise.all([
      this.sellTokenEntity
        .find({
          _id: {
            $lt: Types.ObjectId.createFromTime(
              new Date(body.startTime).getTime() / 1000,
            ),
          },
          contractAddress,
        })
        .sort({ _id: -1 })
        .limit(1),
      this.sellTokenEntity.find({
        _id: {
          $gte: Types.ObjectId.createFromTime(
            new Date(body.startTime).getTime() / 1000,
          ),
          $lte: Types.ObjectId.createFromTime(
            new Date(endTime).getTime() / 1000,
          ),
        },
        contractAddress,
      }),
      this.sellTokenEntity
        .find({
          _id: {
            $gt: Types.ObjectId.createFromTime(
              new Date(endTime).getTime() / 1000,
            ),
          },
          contractAddress,
        })
        .sort({ _id: 1 })
        .limit(1),
    ]);

    return [...getAllEll[0], ...getAllEll[1], ...getAllEll[2]];
  }
}
