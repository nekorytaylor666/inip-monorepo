import React from "react";

import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
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

const DreamsCollection = ({ dreams }: { dreams: NFT<Erc1155>[] }) => {
    return (
        <SimpleGrid columns={3} gap={8}>
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
                width={"500px"}
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
                    "Loading..."
                )}
            </Flex>
            <Text
                color={"#979391"}
                fontWeight={500}
                fontFamily={"QtOpt"}
                height={120}
                mt={1}
            >
                {item.metadata.description}
            </Text>
            <Button
                w={"100%"}
                minH={"74px"}
                borderRadius={0}
                color={"#fff"}
                fontSize={"20px"}
                fontWeight={700}
                fontFamily={"Inter"}
                bg={
                    "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #748E9C"
                }
            >
                Succeed by {item.owner}
            </Button>
        </Box>
    );
};

export default DreamsCollection;
