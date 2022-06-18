import { Injectable } from '@nestjs/common';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

@Injectable()
export class GetNftCollectionService {
  constructor() {
    this.initGetAll();
  }
  async initGetAll() {
    const sdk = new ThirdwebSDK('rinkeby');
    const contract = sdk.getNFTCollection(
      '0x170263bFB594EEEAAa3bFd240386b7B84381E2F3',
    );
    console.log(await contract.getAll());

    const marketPlaceContract = sdk.getMarketplace(
      '0x3662Fff4Ecc063d3Fb1B17A0137896fb4bf3276F',
    );
    console.log(await marketPlaceContract.getAllListings());
  }
}
