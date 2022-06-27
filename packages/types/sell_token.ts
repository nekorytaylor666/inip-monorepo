import { CurrencyValue } from "@thirdweb-dev/sdk";
import { BigNumberish } from "ethers";

export interface SellTokenEntityInterface {
  buyoutPrice: BigNumberish; // BigNumberish
  buyoutCurrencyValuePerToken: CurrencyValue;
  transactionHash: string;
  from: string;
  to: string;
  contractAddress: string;
  tokenId: string;
}
