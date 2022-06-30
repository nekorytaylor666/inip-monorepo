import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import {
  SellTokenEntity,
  SellTokenEntityDocument,
} from '../model/sell_token.model';

const sdk = new ThirdwebSDK('rinkeby');

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
    let contractMetadata;
    let tokenMetadata;
    contractMetadata = await sdk
      .getNFTCollection(body.contractAddress)
      .metadata.get();
    if (contractMetadata != null) {
      tokenMetadata = (
        await sdk.getNFTCollection(body.contractAddress).get(body.tokenId)
      ).metadata;
    } else {
      contractMetadata = await sdk
        .getNFTDrop(body.contractAddress)
        .metadata.get();
      tokenMetadata = (
        await sdk.getNFTDrop(body.contractAddress).get(body.tokenId)
      ).metadata;
    }

    const check = await this.sellTokenEnityModel.create({
      ...body,
      contractMetadata,
      tokenMetadata,
    });
    return check;
  }
}
