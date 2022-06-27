import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NFTCollection } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import { UpdateMarketPlaceService } from 'src/marketplace/services/update_marektplace.service';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import { NFTCollectionDocument } from 'src/nft_collection/model/nft_collection.model';

@Controller()
export class MetaDataController {
  constructor(
    @InjectModel(NFTCollection.name)
    private nftCollectionModel: Model<NFTCollectionDocument>,
    @InjectModel(ListingAdapter.name)
    private listingAdapterDocumentnModel: Model<ListingAdapterDocument>,
  ) {}

  @Get('nft_collection')
  async getNft_collection(): Promise<NFTCollectionDocument[]> {
    return this.nftCollectionModel.find();
  }

  @Get('listings')
  async getListings(): Promise<NFTCollectionDocument[]> {
    return this.listingAdapterDocumentnModel.find();
  }

  @Get('nft_collection/:id')
  async getNft_collection_id(
    @Param('id') id: string,
  ): Promise<NFTCollectionDocument[]> {
    return this.nftCollectionModel.findOne({
      id,
    });
  }
}
