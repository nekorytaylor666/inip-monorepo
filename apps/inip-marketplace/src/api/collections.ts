import { MARKETPLACE_ADDRESS } from "src/utils/const";
import { sdk } from "./thirdweb";

export const getNFTCollection = (collectionId: string) => {
    return sdk.getNFTCollection(collectionId);
};

export const marketplace = sdk.getMarketplace(MARKETPLACE_ADDRESS);
