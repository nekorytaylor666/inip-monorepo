import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ContractMetadata, ThirdwebSDK } from '@thirdweb-dev/sdk';
import { BigNumber } from 'ethers';
import { Model } from 'mongoose';
import { marketPlaceAddress } from 'src/main';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { NFTCollectionEntity } from '../model/nft_collection.model';
import { NftCollectionFloorPriceService } from '../services/get_floor_price.service';

const sdk = new ThirdwebSDK('rinkeby');
@Controller('marketplace')
export class NftCollectionController {
  constructor(
    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionModel: Model<NFTCollectionEntity>,

    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapter>,
    private nftCollectionFloorPriceService: NftCollectionFloorPriceService,
  ) {}

  @Post()
  async createCollectionListing() {
    // await sdk.getMarketplace(marketPlaceAddress).direct.createListing
  }
}
