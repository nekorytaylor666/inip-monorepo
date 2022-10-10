export type AvailableCoins = "ETH" | "USDC" | "SOL";

type CryptoIconsDict = {
    [k in AvailableCoins]: string;
};

export const CRYPTO_ICONS: CryptoIconsDict = {
    ETH: "/icons/eth.svg",
    USDC: "/icons/usdc.svg",
    SOL: "/icons/sol.svg",
};
