import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { BigNumber } from 'ethers';
import { Model } from 'mongoose';
import { marketPlaceAddress } from 'src/main';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { NFTCollectionEntity } from 'src/nft_collection/model/nft_collection.model';
import { NftCollectionCheckService } from 'src/nft_collection/services/check_controller.service';
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
    private nftCollectionCheckService: NftCollectionCheckService,
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
    await this.nftCollectionCheckService.checkExistNftCollectionOrCreate(
      listing.assetContractAddress,
    );
    this.updateSingleListingService.updateFloorPrice({
      buyoutPrice: listing.buyoutPrice,
      contractAddress: listing.assetContractAddress,
    });

    await this.updateSingleListingService.updateSingleListing({
      listing,
    });
  }

  @Post('check')
  async check(
    @Body()
    body: {
      collectionId: string;
    },
  ) {
    // const listingId = BigNumber.from(body.listingId);
    // const listing = await sdk
    //   .getMarketplace(marketPlaceAddress)
    //   .getListing(listingId);
    // this.updateSingleListingService.updateFloorPrice({
    //   buyoutPrice: listing.buyoutPrice,
    //   contractAddress: listing.assetContractAddress,
    // });
    // await this.updateSingleListingService.updateSingleListing({
    //   listing,
    // });
  }

  @Get('get-all-listing')
  async getAllListing() {
    const listings = await sdk
      .getMarketplace(marketPlaceAddress)
      .getAllListings();
    console.log(listings[5].tokenId.toString());
    console.log(listings);
  }
}
