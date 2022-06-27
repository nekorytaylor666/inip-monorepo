import { getNftsForOwner, initializeAlchemy, Network } from "@alch/alchemy-sdk";

export default async function handler(req, res) {
    try {
        const settings = {
            apiKey: "uCzPq-Nhfd_Ne3eu5OYRqkS8ziXyv17x", // Replace with your Alchemy API Key.
            network: Network.ETH_RINKEBY, // Replace with your network.
            maxRetries: 10,
        };
        const alchemy = initializeAlchemy(settings);
        const nftsForOwner = await getNftsForOwner(alchemy, "0xshah.eth");

        res.status(200).json(nftsForOwner);
    } catch (error) {
        res.status(500).json(error);
    }
}
