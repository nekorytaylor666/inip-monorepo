import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    HStack,
    SimpleGrid,
    Skeleton,
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
    NFTMetadataOwner,
} from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import eth from "@public/icons/homepage/ethereum.svg";
import Image from "next/image";
import whiteEth from "@public/icons/header/eth.svg";

const ItemPage = () => {
    const router = useRouter();
    const itemId = router.query.itemId as string;
    const collectionId = router.query.collectionId as string;
    const nftCollection = useNFTCollection(collectionId);
    const marketplace = useMarketplace(
        "0x58b363FD0c4cA8020e714D1297611eF72af4110c",
    );
    const [listing, setListings] = useState<
        (AuctionListing | DirectListing) | undefined
    >();
    const [listingLoading, setListingLoading] = useState(false);
    const [loadingBuying, setLoadingBuying] = useState(false);
    useEffect(() => {
        getActiveListing();
    }, [itemId]);

    const getActiveListing = async () => {
        try {
            setListingLoading(true);
            const listing = await marketplace?.getListing(itemId);
            setListings(listing);
            setListingLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    if (!listing) {
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

    const buyoutListing = async () => {
        setLoadingBuying(true);
        await marketplace?.buyoutListing(itemId, 1);
        router.push("/collections/123");
        setLoadingBuying(false);
    };
    return (
        <>
            <Container mt="12" maxW="1440px">
                <Grid templateColumns={"500px 1fr"} gap="100px">
                    <Box>
                        <MediaRenderer
                            width="100%"
                            src={listing?.asset.image}
                            alt="A mp4 video"
                        />
                        <Text
                            fontWeight={"extrabold"}
                            mt="12"
                            as="h4"
                            fontSize="xl"
                        >
                            Details
                        </Text>
                        <VStack mt="12" align={"stretch"} w="full" gap={"8"}>
                            <Flex align={"center"} justify={"space-between"}>
                                <Text fontWeight={"bold"}>
                                    Contract Address
                                </Text>
                                <Text
                                    color="brand.lightBlue"
                                    isTruncated
                                    w={"32"}
                                >
                                    {listing?.assetContractAddress}
                                </Text>
                            </Flex>
                            <Flex align={"center"} justify={"space-between"}>
                                <Text fontWeight={"bold"}>Token ID</Text>
                                <Text isTruncated w={"32"}>
                                    {itemId}
                                </Text>
                            </Flex>
                            <Flex align={"center"} justify={"space-between"}>
                                <Text fontWeight={"bold"}>Token Standard</Text>
                                <Text isTruncated w={"32"}>
                                    ERC-1155
                                </Text>
                            </Flex>
                            <Flex align={"center"} justify={"space-between"}>
                                <Text fontWeight={"bold"}>Blockchain</Text>
                                <Text isTruncated w={"32"}>
                                    Ethereum
                                </Text>
                            </Flex>
                        </VStack>
                    </Box>
                    <Box>
                        <Heading>{listing?.asset.name}</Heading>
                        <HStack my={4}>
                            <Image width={30} height={40} src={eth} />
                            <Text fontWeight={"extrabold"} fontSize={"2xl"}>
                                {
                                    listing?.buyoutCurrencyValuePerToken
                                        .displayValue
                                }
                            </Text>
                        </HStack>
                        <VStack
                            gap={12}
                            mt={12}
                            alignItems={"start"}
                            maxW={800}
                        >
                            <HStack w="full" gap={8} justify={"flex-start"}>
                                <VStack align={"start"}>
                                    <Text fontWeight={"medium"} m={0}>
                                        {" "}
                                        Collection of
                                    </Text>
                                    <Heading
                                        fontSize={"xl"}
                                        m={0}
                                        fontWeight={"bold"}
                                    >
                                        {listing?.id}
                                    </Heading>
                                </VStack>
                                <VStack align={"start"}>
                                    <Text fontWeight={"medium"} m={0}>
                                        Owned by
                                    </Text>
                                    <Heading
                                        w={200}
                                        isTruncated
                                        fontSize={"xl"}
                                        m={0}
                                        fontWeight={"bold"}
                                    >
                                        {listing?.sellerAddress}
                                    </Heading>
                                </VStack>
                            </HStack>
                            <VStack align={"start"}>
                                <Text fontWeight={"medium"} m={0}>
                                    Description
                                </Text>
                                <Text fontSize={"lg"}>
                                    {listing?.asset.description}
                                </Text>
                            </VStack>
                        </VStack>
                        <Button
                            isLoading={loadingBuying}
                            onClick={buyoutListing}
                            mt={12}
                            h={"80px"}
                            w={"200px"}
                            bg={
                                "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%) #748E9C"
                            }
                            color={"#fff"}
                            fontSize={"20px"}
                            borderRadius={"0"}
                        >
                            Buy for{" "}
                            {listing?.buyoutCurrencyValuePerToken.displayValue}{" "}
                            eth
                        </Button>
                    </Box>
                </Grid>
            </Container>
        </>
    );
};

export default ItemPage;
