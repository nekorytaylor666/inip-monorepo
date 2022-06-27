import { Injectable } from '@nestjs/common';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

@Injectable()
export class GetNftCollectionService {
  constructor() {
    this.initGetAll();
  }
  async initGetAll() {
    // const sdk = new ThirdwebSDK('rinkeby');
    // const contract = sdk.getNFTCollection(
    //   '0x170263bFB594EEEAAa3bFd240386b7B84381E2F3',
    // );
    // console.log(await contract.getAll());
    // console.log(await marketPlaceContract.getAllListings());
  }
}
