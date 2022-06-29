import { Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { NFTCollectionEntity } from '../model/nft_collection.model';
import { NftCollectionFloorPriceService } from '../services/get_floor_price.service';

// const sdk = new ThirdwebSDK('rinkeby');
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
