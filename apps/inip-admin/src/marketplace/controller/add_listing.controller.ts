import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { BigNumber } from 'ethers';
import { Model } from 'mongoose';
import { marketPlaceAddress } from 'src/main';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { NFTCollectionEntity } from 'src/nft_collection/model/nft_collection.model';
import { UpdateSingleListingService } from '../services/update_single_listing.service';

const sdk = new ThirdwebSDK('rinkeby');

@Controller()
export class AddListingController {
  constructor(
    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionModel: Model<NFTCollectionEntity>,
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapter>,

    private updateSingleListingService: UpdateSingleListingService,
  ) {}

  @Post('addListing')
  async addListing(
    @Body()
    body: {
      listingId: BigNumber;
    },
  ) {
    const listingId = BigNumber.from(body.listingId);
    const listing = await sdk
      .getMarketplace(marketPlaceAddress)
      .getListing(listingId);

    const collection = await this.nftCollectionModel.findOne({
      address: listing.assetContractAddress,
    });
    const floorPrice = BigNumber.isBigNumber(collection.floorPrice)
      ? BigNumber.from(collection.floorPrice)
      : listing.buyoutPrice;

    if (listing.buyoutPrice.lte(floorPrice)) {
      this.updateSingleListingService.updateFloorPrice({
        buyoutPrice: listing.buyoutPrice,
        contractAddress: listing.assetContractAddress,
      });
    }
    await this.updateSingleListingService.updateSingleListing({
      listing,
    });
  }
}
