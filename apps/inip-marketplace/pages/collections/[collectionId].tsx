import {
    Box,
    Container,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Skeleton,
    Spinner,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
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
import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import eth from "@public/icons/homepage/ethereum.svg";
import { truncateString } from "src/utils/helpers";
import whiteEth from "@public/icons/header/eth.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import {
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
import { api } from "src/api/axios";
import { format, subDays } from "date-fns";
import { SellTokenEntityInterface } from "@inip/types";
import { ethers } from "ethers";
import { MARKETPLACE_ADDRESS } from "src/utils/const";
import axios from "axios";

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
                            <ActivityTab></ActivityTab>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </>
    );
};

interface ChartDataItem {
    date: string;
    price: string;
}

const ActivityChart = ({ data }: { data: ChartDataItem[] }) => {
    return (
        <Box w={1000} overflowX="scroll">
            <ComposedChart width={1000} height={300} data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#9DB8C8"
                            stopOpacity={0.1}
                        />
                        <stop
                            offset="95%"
                            stopColor="#FFFFFF"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis dataKey="price" />
                <Tooltip />
                <CartesianGrid vertical={false} stroke="#DDD" />

                <Line
                    type="monotone"
                    strokeLinecap="round"
                    strokeWidth={2}
                    dataKey="price"
                    stroke="#748E9C"
                    dot={false}
                    legendType="none"
                />
                <Area
                    type="monotone"
                    dataKey="price"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
            </ComposedChart>
        </Box>
    );
};

const CustomTh: React.FC<PropsWithChildren> = ({ children }) => (
    <Th color="#979391" fontWeight={"bold"} fontFamily={"body"}>
        {children}
    </Th>
);

const ActivityTab = () => {
    const router = useRouter();
    const collectionId = router.query.collectionId as string;

    const { data, isLoading } = useQuery(
        `activity:${collectionId}`,
        async () => {
            const contractAddress = sdk
                .getNFTCollection(collectionId)
                .getAddress();
            const today = new Date();
            const startTime = subDays(today, 100);
            const activityReqParams = {
                startTime,
                contractAddress,
            };
            const res = await api.post("/get_sell", activityReqParams);
            return res.data as SellTokenEntityInterface[];
        },
    );

    const dataToChartItems = (
        data: SellTokenEntityInterface[],
    ): ChartDataItem[] => {
        return data
            .map((el) => {
                const price = ethers.utils.formatEther(el.buyoutPrice);
                const date = format(
                    new Date(el.createDate ?? ""),
                    "HH:mm, dd MMM yyyy",
                );
                return {
                    date,
                    price,
                };
            })
            .reverse();
    };

    const chartData = useMemo(() => {
        return dataToChartItems(data ?? []);
    }, [data]);

    const dataToTableRow = (row: SellTokenEntityInterface) => {
        const price = ethers.utils.formatEther(row.buyoutPrice);
        const tokenId = ethers.utils.formatEther(row.tokenId);
        return (
            <Tr>
                <Td fontWeight={"bold"}>
                    <Flex alignItems={"center"} justifyContent="center" gap={4}>
                        <MediaRenderer
                            style={{
                                width: 80,
                                height: 80,
                                objectFit: "cover",
                                borderRadius: "0.5rem",
                            }}
                            src={row.tokenMetadata.image}
                            alt="A mp4 video"
                        />
                        <Text isTruncated w="150px">
                            {row.tokenMetadata.name}
                        </Text>
                    </Flex>
                </Td>
                <Td fontWeight={"bold"}>
                    <Text isTruncated w="150px">
                        {row.from}
                    </Text>
                </Td>
                <Td fontWeight={"bold"}>
                    <Text isTruncated w="150px">
                        {row.to}
                    </Text>
                </Td>
                <Td fontWeight={"bold"}>
                    <Text isTruncated w="150px">
                        {row.contractAddress}
                    </Text>
                </Td>
                <Td fontWeight={"bold"}>
                    <Text isTruncated w="150px">
                        {price}
                    </Text>
                </Td>
                <Td fontWeight={"bold"}>
                    <Text isTruncated w="150px">
                        {row.createDate &&
                            format(
                                new Date(row.createDate),
                                "HH:mm, dd MMM yyyy",
                            )}
                    </Text>
                </Td>
            </Tr>
        );
    };
    if (isLoading) return <Spinner></Spinner>;

    return (
        <Box>
            <ActivityChart data={chartData ?? []}></ActivityChart>
            <Box mt={8}>
                <Heading fontSize={"2xl"}>Sales history.</Heading>
                <TableContainer mt={4}>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <CustomTh>Artwork</CustomTh>
                                <CustomTh>From</CustomTh>
                                <CustomTh>To</CustomTh>
                                <CustomTh>Contract address</CustomTh>
                                <CustomTh>Price</CustomTh>
                                <CustomTh>Date</CustomTh>
                            </Tr>
                        </Thead>
                        <Tbody>{data?.map((row) => dataToTableRow(row))}</Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

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

    const { data: totalSales } = useQuery(`totalSales:${collectionId}`, () =>
        api
            .post("/totalSales", { contractAddress: collectionId })
            .then(({ data }) => data),
    );

    const { data: floorPrice } = useQuery(`floorPrice:${collectionId}`, () =>
        api
            .post("/get_floor_price", { contractAddress: collectionId })
            .then(({ data }) => data),
    );

    const { data: contractMetadata } = useQuery(
        `contractMetada:${collectionId}`,
        () =>
            axios
                .get(`/api/collection-supply/${collectionId}`)
                .then(({ data }) => data),
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
                                        <Text m={0}>Supply</Text>
                                        <Text
                                            fontSize={"xl"}
                                            m={0}
                                            fontWeight={"bold"}
                                        >
                                            {contractMetadata?.totalSupply ??
                                                "Unavailable"}
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
                                                {ethers.utils.formatEther(
                                                    floorPrice,
                                                )}
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
                                                {ethers.utils.formatEther(
                                                    totalSales,
                                                )}
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
            <Box>
                <MediaRenderer
                    style={{ objectFit: "cover", width: 500, height: 500 }}
                    src={item.asset.image}
                    alt="A mp4 video"
                />
            </Box>
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

    const [listings, setListings] = useState([]);
    const [isListingsLoading, setIsListingsLoading] = useState(false);
    const getActiveListing = async () => {
        setIsListingsLoading(true);
        const tokenContract = collection?.getAddress();
        if (!tokenContract) return;
        const listings = await sdk
            .getMarketplace(MARKETPLACE_ADDRESS)
            .getActiveListings({
                tokenContract,
            });
        setListings(listings);
        setIsListingsLoading(false);
    };
    useEffect(() => {
        getActiveListing();
    }, [collection]);

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
