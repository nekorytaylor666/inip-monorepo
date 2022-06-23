import { Controller, Get, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NFTCollection } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import { NFTCollectionDocument } from '../model/nft_collection.model';
import { UpdateMarketPlaceService } from '../services/update_market_place.service';

@Controller()
export class MetaDataController {
  constructor(
    @InjectModel(NFTCollection.name)
    private nftCollectionModel: Model<NFTCollectionDocument>,
    @InjectModel(ListingAdapter.name)
    private listingAdapterDocumentnModel: Model<ListingAdapterDocument>,
    private updateMarketPlaceService: UpdateMarketPlaceService,
  ) {}

  @Get('nft_collection')
  async getNft_collection(): Promise<NFTCollectionDocument[]> {
    return this.nftCollectionModel.find();
  }

  @Post('update')
  async update(): Promise<NFTCollectionDocument[]> {
    this.updateMarketPlaceService.init();
    return null;
  }

  @Get('listings')
  async getListings(): Promise<NFTCollectionDocument[]> {
    return this.listingAdapterDocumentnModel.find();
  }
}
