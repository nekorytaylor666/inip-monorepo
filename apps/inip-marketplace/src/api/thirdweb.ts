import { ChainId, ThirdwebSDK } from "@thirdweb-dev/sdk";

export const chainRpc = {
    [ChainId.Rinkeby]:
        "https://eth-rinkeby.alchemyapi.io/v2/uCzPq-Nhfd_Ne3eu5OYRqkS8ziXyv17x",
};

export const sdk = new ThirdwebSDK("rinkeby", {
    readonlySettings: {
        rpcUrl: chainRpc[ChainId.Rinkeby],
        chainId: ChainId.Rinkeby,
    },
});
