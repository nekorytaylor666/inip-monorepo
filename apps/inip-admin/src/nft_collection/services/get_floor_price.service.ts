import { Injectable } from '@nestjs/common';
import {} from '@nestjs/mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
// import { Model } from 'mongoose';
import { marketPlaceAddress } from 'src/main';
// import { NFTCollectionEntity } from '../model/nft_collection.model';

@Injectable()
export class NftCollectionFloorPriceService {
  async getFloorPrice(address: string) {
    const sdk = new ThirdwebSDK('rinkeby');
    const allListing = await sdk
      .getMarketplace(marketPlaceAddress)
      .getActiveListings({
        tokenContract: address,
      });
    if (!allListing.length) throw 'No active listings';

    const floorPrice = allListing.reduce((a, b) => {
      if (b.buyoutPrice.lt(a.buyoutPrice)) return b;
      return a;
    }, allListing[0]).buyoutPrice;
    return floorPrice;
  }
}
