import React from "react";
import {
    Box,
    Button,
    Flex,
    Heading,
    SimpleGrid,
    Text,
    Spinner,
} from "@chakra-ui/react";
import { Erc1155 } from "@thirdweb-dev/sdk";
import {
    MediaRenderer,
    NFT,
    useClaimConditions,
    useEditionDrop,
} from "@thirdweb-dev/react";
import { DREAMS_COME_TRUE_EDITION_ADDRESS } from "../../utils/const";
import { AvailableCoins, CRYPTO_ICONS } from "../../utils/crypto_icons";
import Image from "next/image";
import InipButton from "@components/button/inip_button";

const DreamsCollection = ({ dreams }: { dreams: NFT<Erc1155>[] }) => {
    return (
        <SimpleGrid columns={[1, 2, 3]} gap={8}>
            {dreams?.map((item, index) => (
                <DreamItem key={index} item={item}></DreamItem>
            ))}
        </SimpleGrid>
    );
};

const DreamItem = ({ item }: { item: NFT<Erc1155> }) => {
    const editionContract = useEditionDrop(DREAMS_COME_TRUE_EDITION_ADDRESS);
    const { data: claimConditions, isLoading } = useClaimConditions(
        editionContract,
        item.metadata.id,
    );
    const initialClaimCondition = claimConditions?.[0];
    return (
        <Box width={"100%"} key={item.metadata.id.toString()}>
            <MediaRenderer
                alt={"Dream image"}
                width={"100%"}
                height={"500px"}
                src={item.metadata.image}
            />
            <Flex
                pt={"10px"}
                justifyContent={"space-between"}
                color={"#1c2529"}
                alignItems={"center"}
            >
                <Heading
                    fontSize={"20px"}
                    fontWeight={700}
                    fontFamily={"QtOpt"}
                >
                    {item.metadata.name}
                </Heading>
                {initialClaimCondition && !isLoading ? (
                    <Flex
                        fontWeight={"bold"}
                        fontFamily={"Inter"}
                        fontSize={"18px"}
                        gap={"4px"}
                    >
                        {initialClaimCondition.currencyMetadata.displayValue}
                        <Image
                            width={24}
                            height={24}
                            src={
                                CRYPTO_ICONS[
                                    initialClaimCondition.currencyMetadata
                                        .symbol as AvailableCoins
                                ]
                            }
                        />
                    </Flex>
                ) : (
                    <Spinner></Spinner>
                )}
            </Flex>
            <Text
                color={"#979391"}
                fontWeight={500}
                fontFamily={"QtOpt"}
                height={120}
                mt={1}
                noOfLines={[1, 2, 3]}
            >
                {item.metadata.description}
            </Text>
            <InipButton>Fulfill a Dream</InipButton>
        </Box>
    );
};

export default DreamsCollection;
