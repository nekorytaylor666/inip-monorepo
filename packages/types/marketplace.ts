import { NFTMetadata } from "@thirdweb-dev/sdk";

export interface INFTCollection {
  address: string;
  metadata: NFTMetadata;
  floorPrice?: {
    _hex: string;
    _isBigNumber: boolean;
  };
}
