import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { BigNumber } from 'ethers';
import { Model } from 'mongoose';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import { NftCollectionCheckService } from 'src/nft_collection/services/check_controller.service';
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
    private nftCollectionCheckService: NftCollectionCheckService,
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapterDocument>,
  ) {}

  @Post('sell')
  async sellToken(
    @Body()
    body: SellTokenEntity,
  ) {
    try {
      console.log('CHECK the world');
      let contractMetadata;
      let tokenMetadata;
      contractMetadata = await sdk
        .getNFTCollection(body.contractAddress)
        .metadata.get();
      if (contractMetadata != null) {
        tokenMetadata = (
          await sdk
            .getNFTCollection(body.contractAddress)
            .get(BigNumber.from(body.tokenId))
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
        tokenId: BigNumber.from(body.tokenId),
      });
      await this.listingAdapterModel.remove({
        assetContractAddress: body.contractAddress,
        tokenId: BigNumber.from(body.tokenId),
      });
      return check;
    } catch (e) {
      console.log(e);
    }
  }
}
