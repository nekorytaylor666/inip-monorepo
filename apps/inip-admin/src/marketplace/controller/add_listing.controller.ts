import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import list from 'adminjs/types/src/frontend/components/actions/list';
import { BigNumber, BigNumberish } from 'ethers';
import { Model } from 'mongoose';
import { marketPlaceAddress } from 'src/main';
import { ListingAdapter } from 'src/mongoose/listing_metadata.model';
import { NFTCollectionEntity } from 'src/nft_collection/model/nft_collection.model';
import { NftCollectionFloorPriceService } from 'src/nft_collection/services/get_floor_price.service';

const sdk = new ThirdwebSDK('rinkeby');

@Controller()
export class AddListingController {
  constructor(
    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionModel: Model<NFTCollectionEntity>,
    @InjectModel(ListingAdapter.name)
    private listingAdapterModel: Model<ListingAdapter>, // private nftCollectionFloorPriceService: NftCollectionFloorPriceService,
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
      await collection.update({
        floorPrice: listing.buyoutPrice,
      });
    }
    await this.listingAdapterModel.findOneAndUpdate(
      {
        tokenId: listing.tokenId,
        assetContractAddress: listing.assetContractAddress,
      },
      listing,
      {
        upsert: true,
      },
    );
  }
}
