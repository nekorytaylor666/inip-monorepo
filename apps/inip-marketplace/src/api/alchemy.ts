import { Network, initializeAlchemy } from "@alch/alchemy-sdk";

const settings = {
    apiKey: "uCzPq-Nhfd_Ne3eu5OYRqkS8ziXyv17x", // Replace with your Alchemy API Key.
    network: Network.ETH_RINKEBY, // Replace with your network.
    maxRetries: 10,
};
export const alchemy = initializeAlchemy(settings);
