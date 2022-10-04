import { ChainId, ThirdwebSDK } from "@thirdweb-dev/sdk";

export const chainRpc = {
    [ChainId.Goerli]:
        "https://eth-goerli.g.alchemy.com/v2/CbZLQTZUeBjEjHc0ZKqASWJWeW0HZPGv",
};

export const sdk = new ThirdwebSDK("goerli", {
    readonlySettings: {
        rpcUrl: chainRpc[ChainId.Goerli],
        chainId: ChainId.Goerli,
    },
});
