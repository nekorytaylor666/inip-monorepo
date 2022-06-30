import { sdk } from "./thirdweb";

export const getNFTCollection = (collectionId: string) => {
    return sdk.getNFTCollection(collectionId);
};

export const marketplace = sdk.getMarketplace(
    "0x5B360DbE1d039B80beEF7dE29EC2B0B832964d1f",
);
