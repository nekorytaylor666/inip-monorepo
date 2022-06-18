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
