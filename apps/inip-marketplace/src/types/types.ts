import { Json } from "@thirdweb-dev/sdk";

export interface CollectionMetadata {
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    seller_fee_basis_points: number;
    fee_recipient: string;
    symbol: string;
}


export interface ListingType {
    _id: string,
    assetContractAddress: string,
    currencyContractAddress: string,
    id: string,
    sellerAddress: string,
    type: number,
    tokenId: {
        _hex: string,
        _isBigNumber: boolean
    },
    secondsUntilEnd: {
        _hex: string,
        _isBigNumber: boolean
    },
    buyoutPrice: {
        _hex: string,
        _isBigNumber: boolean
    },
    asset: {
        background_color: string,
        description: string,
        external_url: string,
        id: {
            _hex: string,
            _isBigNumber: boolean
        },
        image: string,
        name: string,
        uri: string,
        _id: string,
    },
    buyoutCurrencyValuePerToken: {
        decimals: number,
        displayValue: string,
        name: string,
        symbol: string,
        _id: string,
        value: {
            _hex: string,
            _isBigNumber: boolean
        }
    },
    startTimeInSeconds: {
        _hex: string,
        _isBigNumber: boolean
    },
    quantity: {
        _hex: string,
        _isBigNumber: boolean
    }
};


export interface PopularType {
    _id: string,
    totalSaleAmount: number,
    nftCollectionMetadata: {
        address: string,
        metadata: {
            description: string,
            fee_recipient: string,
            image: string,
            name: string,
            seller_fee_basis_points: number,
            symbol: string
        },
        _id: string
    }
}


export interface NFTItemType {
    item: {
        id: string,
        image: StaticImageData,
        price: number,
        lastPrice: number,
        title: string,
        author: string,
    };
    liked? : boolean,
}