import { Controller, Get, Param } from '@nestjs/common';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

@Controller()
export class NftCollectionController {
  @Get('floorprice/:address')
  async getFloorPrice(@Param('address') address: string) {
    try {
      const sdk = new ThirdwebSDK('rinkeby');
      // const nftCollection = sdk.getNFTCollection(address);
      // const yee = await sdk.getMarketplace('').buyoutListing('');
      // yee.receipt.contractAddress
      const allListing = await sdk
        .getMarketplace('0x5B360DbE1d039B80beEF7dE29EC2B0B832964d1f')
        .getAllListings();
      console.log(allListing);
      // allListing[0].buyoutCurrencyValuePerToken
    } catch (e) {
      console.log(e);
    }
    // const allTokens = await nftCollection.getAll();
    // (await sdk.getTokenDrop('').claimConditions.getAll()).;
    // const tokens = allTokens.map((e) => e.metadata.id);
    // allTokens.reduce(()=>{}, allTokens[0])
  }
}
