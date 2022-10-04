import { Network, initializeAlchemy } from "@alch/alchemy-sdk";

const settings = {
    apiKey: "CbZLQTZUeBjEjHc0ZKqASWJWeW0HZPGv", // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
    maxRetries: 10,
};
export const alchemy = initializeAlchemy(settings);
