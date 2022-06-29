import axios from "axios";
import { api } from "./axios";
import { INFTCollection } from "@inip/types";

export const getCollections = () => {
    return api.get<INFTCollection[]>("/nft_collection").then((res) => res.data);
};
