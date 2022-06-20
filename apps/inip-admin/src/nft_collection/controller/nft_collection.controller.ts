import { Controller, Get, Post, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NFTCollection } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import { NFTCollectionDocument } from '../model/nft_collection.model';
import { UpdateMarketPlaceService } from '../services/update_market_place.service';

@Controller('notification')
export class NotificationController {
  constructor(
    @InjectModel(NFTCollection.name)
    private nftCollectionModel: Model<NFTCollectionDocument>,

    private updateMarketPlaceService: UpdateMarketPlaceService,
  ) {
    console.log('DAMN');
  }

  @Get()
  async getNotification(@Req() req): Promise<NFTCollectionDocument[]> {
    console.log('CHECL');
    return this.nftCollectionModel.find();
  }

  @Post('update')
  async update(@Req() req): Promise<NFTCollectionDocument[]> {
    this.updateMarketPlaceService.init();
    return null;
  }
}

// TODO
@Controller('listings')
export class ListingsController {
  constructor(
    @InjectModel(ListingAdapter.name)
    private listingAdapterDocumentnModel: Model<ListingAdapterDocument>,

    private updateMarketPlaceService: UpdateMarketPlaceService,
  ) {
    console.log('DAMN');
  }

  @Get()
  async getNotification(@Req() req): Promise<ListingAdapterDocument[]> {
    return this.listingAdapterDocumentnModel.find();
  }

  @Post('update')
  async update(@Req() req): Promise<NFTCollectionDocument[]> {
    this.updateMarketPlaceService.init();
    return null;
  }
}
