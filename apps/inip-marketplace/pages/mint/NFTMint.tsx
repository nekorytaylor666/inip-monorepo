import React from "react";
import { useMintNFT, useNFTCollection, useNFTs } from "@thirdweb-dev/react";

function NFTMint(address: string) {
    const nftCollection = useNFTCollection(
        "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
    );
    const { data: nfts } = useNFTs(nftCollection);
    const { mutate: mintNFT } = useMintNFT(nftCollection);

    const mint = () => {
        mintNFT({
            to: address,
            metadata: {
                name: "Conor Mcgregor Heyday",
                description: "Conor Mcgregor's heyday All knockout victories",
            },
        });
    };

    return (
        <div>
            <button
                onClick={() => {
                    mint();
                    console.log("MINT");
                }}
            >
                Mint
            </button>
            <ul>
                {nfts?.map((nft) => {
                    <li key={nft.metadata.id.toString()}>
                        {nft.metadata.name}
                        ds
                    </li>;
                })}
            </ul>
        </div>
    );
}

export default NFTMint;
