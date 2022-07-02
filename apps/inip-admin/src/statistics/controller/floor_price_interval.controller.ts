import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { SellTokenEntity } from '../model/sell_token.model';
import { GetFloorPriceInterface } from '@inip/types';
import { NFTCollectionEntity } from 'src/nft_collection/model/nft_collection.model';
import { BigNumber } from 'ethers';

@Controller()
export class FlootPriceIntervalController {
  constructor(
    @InjectModel(SellTokenEntity.name)
    private sellTokenEntity: Model<SellTokenEntity>,
    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionEntity: Model<NFTCollectionEntity>,

    @InjectModel(SellTokenEntity.name)
    private sellTokenEntitymodel: Model<SellTokenEntity>,
  ) {}

  @Post('get_sell')
  async getSells(
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

    return [...getAllEll[0], ...getAllEll[1], ...getAllEll[2]].map((e) => ({
      ...e,
      createDate: e._id.getTimestamp(),
    }));
  }

  @Post('get_floor_price')
  async getFloorPrices(
    @Body()
    body: GetFloorPriceInterface,
  ) {
    return (
      await this.nftCollectionEntity.findOne({
        address: body.contractAddress,
      })
    ).floorPrice;
  }

  @Post('totalSales')
  async totalSales(
    @Body()
    body: GetFloorPriceInterface,
  ) {
    const sales = await this.sellTokenEntitymodel.find({
      contractAddress: body.contractAddress,
    });
    // sales[0].metadata
    // name?: string;
    // description?: string;
    // image?: string;
    // external_url?: string;
    // animation_url?: string;
    // uri: string;
    // id: BigNumber;
    if (!sales.length) return 0;

    return sales.reduce((prevValue, currentValue) => {
      return prevValue.add(BigNumber.from(currentValue.buyoutPrice));
      // return prevValue + BigNumber.from(currentValue.buyoutPrice).toNumber();
    }, BigNumber.from(0));
  }
}
