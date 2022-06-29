import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NFTCollection } from '@thirdweb-dev/sdk';
import { Model } from 'mongoose';
import { UpdateMarketPlaceService } from 'src/marketplace/services/update_marektplace.service';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import {
  NFTCollectionEntity,
  NFTCollectionEntityDocument,
} from 'src/nft_collection/model/nft_collection.model';

@Controller()
export class MetaDataController {
  constructor(
    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionModel: Model<NFTCollectionEntityDocument>,
    @InjectModel(ListingAdapter.name)
    private listingAdapterDocumentnModel: Model<ListingAdapterDocument>,
  ) {}

  @Get('nft_collection')
  async getNft_collection(): Promise<NFTCollectionEntityDocument[]> {
    return this.nftCollectionModel.find();
  }

  @Get('listings')
  async getListings(): Promise<NFTCollectionEntityDocument[]> {
    return this.listingAdapterDocumentnModel.find();
  }

  @Get('nft_collection/:id')
  async getNft_collection_id(
    @Param('id') id: string,
  ): Promise<NFTCollectionEntityDocument[]> {
    return this.nftCollectionModel.findOne({
      id,
    });
  }
}
