import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ListingAdapter,
  ListingAdapterDocument,
} from 'src/mongoose/listing_metadata.model';
import {
  NFTCollectionEntity,
  NFTCollectionEntityDocument,
} from 'src/nft_collection/model/nft_collection.model';
import { meiliSearchClient } from '../meili_search.module';

@Injectable()
export class MeiliSearchService {
  constructor(
    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionModel: Model<NFTCollectionEntityDocument>,
    @InjectModel(ListingAdapter.name)
    private listingAdapterDocumentnModel: Model<ListingAdapterDocument>,
  ) {
    this.init();
  }

  async init() {
    const _cursor = this.nftCollectionModel.collection.find();
    const docs = await _cursor.toArray();
    _cursor.close();

    const _dataAdded = docs.map((data) => {
      const e = data;

      return {
        metadata: e.metadata,
        id: e._id,
        address: e.address,
        name: e.metadata.name,
      };
    });

    await meiliSearchClient.index('collection').addDocuments(_dataAdded);
    await meiliSearchClient.index('collection').updateSettings({
      searchableAttributes: ['name', 'address'],
      distinctAttribute: 'id',
    });
  }
}
