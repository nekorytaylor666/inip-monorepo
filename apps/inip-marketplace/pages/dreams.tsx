import React, { useState } from "react";
import Image from "next/image";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    SimpleGrid,
    Skeleton,
    SkeletonText,
    Text,
} from "@chakra-ui/react";
import upward from "@public/icons/upward.svg";
import downward from "@public/icons/downward.svg";
import DreamsLayout from "@components/layout/dreams-layout";
import { NextPageWithLayout } from "./_app";
import { NFT, useEditionDrop } from "@thirdweb-dev/react";
import { useQuery } from "react-query";
import { Erc1155 } from "@thirdweb-dev/sdk";
import DreamsCollection from "@components/dreams-collection";
import { DREAMS_COME_TRUE_EDITION_ADDRESS } from "../src/utils/const";

export interface DreamsNFT {
    id: string;
    author: string;
    desc: string;
    price: number;
    name: string;
    img: StaticImageData;
}

const Dreams = () => {
    const [showCriteria, setShowCriteria] = useState(true);

    const editionDrop = useEditionDrop(DREAMS_COME_TRUE_EDITION_ADDRESS);

    const { data: dreams, isLoading: isDreamsLoading } = useQuery(
        ["getAll", "0x32D52eC7D2e1DE243c07C2290610E36b2Ea93709"],
        () => {
            return editionDrop?.getAll() as NFT<Erc1155>[] | undefined;
        },
    );

    return (
        <Box p={[8, 16, 32]}>
            <Box color={"#1c2529"}>
                <Heading
                    fontFamily={"Swing"}
                    fontSize={[64, 140]}
                    fontWeight={400}
                >
                    Dreams
                </Heading>
                <Text
                    maxW={"470px"}
                    fontFamily={"Inter"}
                    fontSize={[20, 32]}
                    fontWeight={500}
                    color={"#aaa"}
                >
                    Collect, sell and buy NFT's from the best creators around
                    the world. Just in clicks
                </Text>
                <Button
                    minW={"220px"}
                    minH={"74px"}
                    border={"2px solid #dedede"}
                    bg={"transparent"}
                    borderRadius={0}
                >
                    About
                </Button>
            </Box>

            <Box pt={[32, 100]}>
                {/*<Flex pb={"30px"}>*/}
                {/*    /!*<Box minW={"45px"} position={"relative"}>*!/*/}
                {/*    /!*    <Image*!/*/}
                {/*    /!*        src={showCriteria ? upward : downward}*!/*/}
                {/*    /!*        onClick={() => setShowCriteria(!showCriteria)}*!/*/}
                {/*    /!*    />*!/*/}

                {/*    /!*    {!showCriteria && (*!/*/}
                {/*    /!*        <Flex*!/*/}
                {/*    /!*            flexDir={"column"}*!/*/}
                {/*    /!*            gap={"30px"}*!/*/}
                {/*    /!*            position={"absolute"}*!/*/}
                {/*    /!*            zIndex={1}*!/*/}
                {/*    /!*            bg={"#fff"}*!/*/}
                {/*    /!*            p={"100px 70px 100px"}*!/*/}
                {/*    /!*            mt={"30px"}*!/*/}
                {/*    /!*            border={"1px solid #d9d9d9"}*!/*/}
                {/*    /!*            color={"#1c2529"}*!/*/}
                {/*    /!*            fontSize={"20px"}*!/*/}
                {/*    /!*            fontWeight={400}*!/*/}
                {/*    /!*        >*!/*/}
                {/*    /!*            <Checkbox size={"md"} gap={"30px"}>*!/*/}
                {/*    /!*                New*!/*/}
                {/*    /!*            </Checkbox>*!/*/}
                {/*    /!*            <Checkbox size={"md"} gap={"30px"}>*!/*/}
                {/*    /!*                In progress*!/*/}
                {/*    /!*            </Checkbox>*!/*/}
                {/*    /!*            <Checkbox size={"md"} gap={"30px"}>*!/*/}
                {/*    /!*                Succeed*!/*/}
                {/*    /!*            </Checkbox>*!/*/}
                {/*    /!*        </Flex>*!/*/}
                {/*    /!*    )}*!/*/}
                {/*    /!*</Box>*!/*/}

                {/*    /!*<Box>All dreams</Box>*!/*/}
                {/*</Flex>*/}
                {isDreamsLoading && (
                    <DreamsLoadingSkeleton></DreamsLoadingSkeleton>
                )}
                {dreams && <DreamsCollection dreams={dreams} />}
            </Box>
        </Box>
    );
};

const DreamsLoadingSkeleton = ({ itemAmount = 9 }: { itemAmount?: number }) => {
    const loadingItemsEmptyArray = new Array(itemAmount).fill(0);
    return (
        <SimpleGrid columns={[1, 2, 3]} gap={8}>
            {loadingItemsEmptyArray.map((_) => (
                <Box>
                    <Skeleton height={[300, 500]} fadeDuration={4}></Skeleton>
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
            ))}
        </SimpleGrid>
    );
};

Dreams.getLayout = function getLayout(page: NextPageWithLayout) {
    return (
        <DreamsLayout setBgImg={true}>
            <>{page}</>
        </DreamsLayout>
    );
};

export default Dreams;
