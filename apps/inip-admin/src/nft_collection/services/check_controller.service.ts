import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  NFTCollectionEntity,
  NFTCollectionEntityDocument,
} from '../model/nft_collection.model';

@Injectable()
export class NftCollectionCheckService {
  constructor(
    @InjectModel(NFTCollectionEntity.name)
    private nftCollectionModel: Model<NFTCollectionEntityDocument>,
  ) {}

  async checkExistNftCollectionOrCreate(contractAddress: string) {
    const check = await this.nftCollectionModel.findOne({
      address: contractAddress,
    });
    if (check) {
    }
    console.log('WTF');
  }
}

// const check = {
//   buyoutCurrencyValuePerToken: {
//     name: 'Rinkeby Ether',
//     symbol: 'RIN',
//     decimals: 18,
//     value: { type: 'BigNumber', hex: '0x038d7ea4c68000' },
//     displayValue: '0.001',
//   },
//   buyoutPrice: { type: 'BigNumber', hÏx: '0x038d7ea4c68000' },
//   contractAddress: '0x1C552ebF58F6AEefaC40adf3bfD72647C169F736',
//   from: '0x0Da44598B61ACe5d89D26D642a362f051eB3FFAf',
//   to: '0x5B360DbE1d039B80beEF7dE29EC2B0B832964d1f',
//   tokenId: '11',
//   transactionHash:
//     '0x54d461d613a4bae2d2baaf7ba1de12e658647a670280d2017433194f3e21c49b',
// };
