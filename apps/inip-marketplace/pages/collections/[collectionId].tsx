import {
    Box,
    Center,
    Container,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Skeleton,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack,
} from "@chakra-ui/react";
import {
    MediaRenderer,
    useMarketplace,
    useNFTCollection,
} from "@thirdweb-dev/react";
import {
    AuctionListing,
    DirectListing,
    NFTMetadata,
    NFTMetadataOwner,
} from "@thirdweb-dev/sdk";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import eth from "@public/icons/homepage/ethereum.svg";
import { truncateString } from "src/utils/helpers";
import { CollectionMetadata } from "src/types/types";
import whiteEth from "@public/icons/header/eth.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area,
    ComposedChart,
} from "recharts";
import { getNFTCollection, marketplace } from "src/api/collections";
import { useQuery } from "react-query";
import { sdk } from "src/api/thirdweb";

const CollectionPage = () => {
    return (
        <>
            <CollectionHeader></CollectionHeader>
            <Container mt="12" maxW="1440px">
                <Tabs variant="unstyled">
                    <TabList mb="12">
                        <Tab _selected={{ color: "black", fontWeight: "bold" }}>
                            Collection
                        </Tab>
                        <Tab _selected={{ color: "black", fontWeight: "bold" }}>
                            Activity
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <NFTItemsGrid />
                        </TabPanel>
                        <TabPanel>
                            <Box w={1000} overflowX="scroll">
                                {renderLineChart}
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </>
    );
};
const data = [
    { name: "2021.12.21", uv: 400, pv: 2400, amt: 2400 },
    { name: "2021.13.21", uv: 600, pv: 2400, amt: 2400 },
    { name: "2021.14.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.15.21", uv: 700, pv: 2400, amt: 2400 },
    { name: "2021.16.21", uv: 400, pv: 2400, amt: 2400 },
    { name: "2021.17.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.18.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.19.21", uv: 600, pv: 2400, amt: 2400 },
    { name: "2021.12.21", uv: 400, pv: 2400, amt: 2400 },
    { name: "2021.13.21", uv: 600, pv: 2400, amt: 2400 },
    { name: "2021.14.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.15.21", uv: 700, pv: 2400, amt: 2400 },
    { name: "2021.16.21", uv: 400, pv: 2400, amt: 2400 },
    { name: "2021.17.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.18.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.19.21", uv: 600, pv: 2400, amt: 2400 },
    { name: "2021.12.21", uv: 400, pv: 2400, amt: 2400 },
    { name: "2021.13.21", uv: 600, pv: 2400, amt: 2400 },
    { name: "2021.14.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.15.21", uv: 700, pv: 2400, amt: 2400 },
    { name: "2021.16.21", uv: 400, pv: 2400, amt: 2400 },
    { name: "2021.17.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.18.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.19.21", uv: 600, pv: 2400, amt: 2400 },
    { name: "2021.12.21", uv: 400, pv: 2400, amt: 2400 },
    { name: "2021.13.21", uv: 600, pv: 2400, amt: 2400 },
    { name: "2021.14.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.15.21", uv: 700, pv: 2400, amt: 2400 },
    { name: "2021.16.21", uv: 400, pv: 2400, amt: 2400 },
    { name: "2021.17.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.18.21", uv: 500, pv: 2400, amt: 2400 },
    { name: "2021.19.21", uv: 600, pv: 2400, amt: 2400 },
];

const renderLineChart = (
    <ComposedChart width={800} height={300} data={data}>
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9DB8C8" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
            </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid vertical={false} stroke="#DDD" />

        <Line
            type="monotone"
            strokeLinecap="round"
            strokeWidth={2}
            dataKey="uv"
            stroke="#748E9C"
            dot={false}
            legendType="none"
        />
        <Area
            type="monotone"
            dataKey="uv"
            stroke={false}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"
        />
    </ComposedChart>
);

const CollectionHeader = () => {
    const router = useRouter();
    const collectionId = router.query.collectionId as string;
    const {
        data: collectionMetadata,
        isLoading: isCollectionMetadataLoading,
        isError: isMetadataError,
        error,
    } = useQuery(`collectionMeta:${collectionId}`, () =>
        sdk.getNFTCollection(collectionId).metadata.get(),
    );

    if (isCollectionMetadataLoading) {
        return (
            <Skeleton
                height="100vh"
                width="100vw"
                style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    border: "1px solid lightgray",
                }}
            />
        );
    }

    if (isMetadataError || !collectionMetadata) {
        return <Box>{error}</Box>;
    }
    return (
        <Box overflow={"hidden"} position={"relative"}>
            <Container height={"xl"} zIndex={10} maxW="1440px">
                <Flex height={"100%"} alignItems={"center"}>
                    <Flex align={"center"} w={"full"} gap={"24px"}>
                        <Box color={"white"} flex={3}>
                            <VStack
                                gap={"24px"}
                                alignItems={"start"}
                                maxW={800}
                            >
                                <Heading>{collectionMetadata.name}</Heading>
                                <HStack w="full" justify={"space-between"}>
                                    <VStack align={"start"}>
                                        <Text m={0}>
                                            {" "}
                                            collectionMetadata of
                                        </Text>
                                        <Text
                                            fontSize={"xl"}
                                            m={0}
                                            fontWeight={"bold"}
                                        >
                                            666
                                        </Text>
                                    </VStack>
                                    <VStack align={"start"}>
                                        <Text m={0}>Owned by</Text>
                                        <Text
                                            w={200}
                                            isTruncated
                                            fontSize={"xl"}
                                            m={0}
                                            fontWeight={"bold"}
                                        >
                                            {collectionMetadata.fee_recipient}
                                        </Text>
                                    </VStack>
                                    <VStack align={"start"}>
                                        <Text m={0}> Floor price</Text>
                                        <HStack>
                                            <Image
                                                color="white"
                                                src={whiteEth}
                                            />

                                            <Text
                                                fontSize={"xl"}
                                                m={0}
                                                fontWeight={"bold"}
                                            >
                                                666
                                            </Text>
                                        </HStack>
                                    </VStack>
                                    <VStack align={"start"}>
                                        <Text m={0}>Total sales</Text>
                                        <HStack>
                                            <Image
                                                color="white"
                                                src={whiteEth}
                                            />

                                            <Text
                                                fontSize={"xl"}
                                                m={0}
                                                fontWeight={"bold"}
                                            >
                                                666
                                            </Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <Text fontSize={"xl"} fontWeight={"semibold"}>
                                    {collectionMetadata.description}
                                </Text>
                            </VStack>
                        </Box>
                        <Box flex={1} justifyContent="end">
                            <MediaRenderer
                                width="500"
                                height="500"
                                src={collectionMetadata.image}
                                alt="A mp4 video"
                            />
                        </Box>
                    </Flex>
                </Flex>
            </Container>
            <Box
                overflow={"hidden"}
                width="110%"
                filter="auto"
                blur="10px"
                position={"absolute"}
                top={"-5%"}
                left={"-5%"}
                zIndex={-1}
            >
                <MediaRenderer
                    style={{
                        objectFit: "cover",
                    }}
                    width="100%"
                    src={collectionMetadata.image}
                    alt="A mp4 video"
                />
            </Box>
        </Box>
    );
};

const ListingItem = ({ item }: { item: AuctionListing | DirectListing }) => {
    return (
        <Box>
            <MediaRenderer
                width="500"
                height="500"
                style={{ objectFit: "cover" }}
                src={item.asset.image}
                alt="A mp4 video"
            />
            <Flex
                color={"#1C2529"}
                mt={"28px"}
                justifyContent={"space-between"}
                direction="column"
                gap={2}
            >
                <Flex
                    w={"full"}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Text
                        fontFamily={"QtOpt"}
                        m={0}
                        fontSize={"20px"}
                        fontWeight={700}
                    >
                        {item.asset.name}
                    </Text>
                    <Text
                        m={0}
                        fontFamily={"Inter"}
                        fontWeight="extrabold"
                        display="flex"
                        alignItems={"center"}
                        gap={1}
                        fontSize={"22px"}
                        textAlign={"end"}
                    >
                        {item.buyoutCurrencyValuePerToken.displayValue}
                        <Image src={eth} />
                    </Text>
                </Flex>
                <Flex alignItems={"center"} color={"#1C2529"}>
                    <Text
                        flex={1}
                        noOfLines={2}
                        fontSize={"14px"}
                        fontWeight={500}
                    >
                        <Text> by {truncateString(item.sellerAddress, 8)}</Text>
                    </Text>
                    <Text fontSize={"14px"} textAlign={"end"} flex={1}>
                        Last price{" "}
                        {item.buyoutCurrencyValuePerToken.displayValue}{" "}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

const NFTItemsGrid = () => {
    //  listingLoading: boolean,
    // listings: (AuctionListing | DirectListing)[] | undefined,
    // collectionId: string,

    const router = useRouter();
    const collectionId = router.query.collectionId as string;
    const collection = useNFTCollection(collectionId);
    const marketplace = useMarketplace(
        "0x5B360DbE1d039B80beEF7dE29EC2B0B832964d1f",
    );

    const [listings, setListings] = useState([]);
    const [isListingsLoading, setIsListingsLoading] = useState(false);
    const getActiveListing = async () => {
        setIsListingsLoading(true);
        const tokenContract = collection?.getAddress();
        const listings = await sdk
            .getMarketplace("0x5B360DbE1d039B80beEF7dE29EC2B0B832964d1f")
            .getActiveListings({
                tokenContract,
            });
        setListings(listings);
        setIsListingsLoading(false);
    };
    useEffect(() => {
        getActiveListing();
    }, []);

    if (isListingsLoading || !listings)
        return (
            <SimpleGrid columns={[1, null, 3]} spacing="40px">
                {[...Array(20)].map(() => (
                    <Skeleton isLoaded={!isListingsLoading}>
                        <Box height={400}></Box>
                    </Skeleton>
                ))}
            </SimpleGrid>
        );

    // if (isMetadataError) return <Box>{error}</Box>;

    return (
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
            {listings?.map((item) => (
                <Link href={`/collections/${collectionId}/${item.id}`}>
                    <Box cursor={"pointer"}>
                        <ListingItem item={item}></ListingItem>
                    </Box>
                </Link>
            ))}
        </SimpleGrid>
    );
};
export default CollectionPage;
