import { getNftsForOwner, initializeAlchemy, Network } from "@alch/alchemy-sdk";
import axios from "axios";

export default async function handler(req, res) {
    try {
        const { contractAddr } = req.query;
        const settings = {
            apiKey: "uCzPq-Nhfd_Ne3eu5OYRqkS8ziXyv17x", // Replace with your Alchemy API Key.
            network: Network.ETH_RINKEBY, // Replace with your network.
            maxRetries: 10,
        };
        const baseURL = `https://${settings.network}.alchemyapi.io/nft/v2/${settings.apiKey}/getContractMetadata`;

        const url = `${baseURL}?contractAddress=${contractAddr}`;
        console.log(url);
        const res = await axios.get(url);
        const { data } = res;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
