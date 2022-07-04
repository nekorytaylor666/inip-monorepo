import { CurrencyValue, NFTMetadata } from "@thirdweb-dev/sdk";
import { BigNumberish } from "ethers";
import { INftCollectionMetadata } from "./nft_colleection_metadata";

export interface SellTokenEntityInterface {
  buyoutPrice: BigNumberish; // BigNumberish
  buyoutCurrencyValuePerToken: CurrencyValue;
  transactionHash: string;
  from: string;
  to: string;
  contractAddress: string;
  tokenId: BigNumberish | string;
  createDate?: Date;
  tokenMetadata: NFTMetadata;
  contractMetadata: INftCollectionMetadata;
}
