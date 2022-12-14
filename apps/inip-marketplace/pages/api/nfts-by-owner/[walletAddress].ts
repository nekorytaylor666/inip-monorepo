import { getNftsForOwner, initializeAlchemy, Network } from "@alch/alchemy-sdk";
import axios from "axios";

export default async function handler(req, res) {
    try {
        const { walletAddress } = req.query;
        const settings = {
            apiKey: "uCzPq-Nhfd_Ne3eu5OYRqkS8ziXyv17x", // Replace with your Alchemy API Key.
            network: Network.ETH_RINKEBY, // Replace with your network.
            maxRetries: 10,
        };
        const alchemy = initializeAlchemy(settings);
        const nftsForOwner = await getNftsForOwner(alchemy, walletAddress);
        const parsedNFTs = nftsForOwner.ownedNfts.map((el) => {
            el.title;
            el.contract;
        });
        res.status(200).json(nftsForOwner);
    } catch (error) {
        res.status(500).json(error);
    }
}
