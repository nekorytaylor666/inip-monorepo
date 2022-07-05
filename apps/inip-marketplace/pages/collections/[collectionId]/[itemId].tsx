import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Center,
    Grid,
    Heading,
    HStack,
    SimpleGrid,
    Skeleton,
    Text,
    useToast,
    VStack,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Tfoot,
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
import { SellTokenEntityInterface } from "@inip/types";
import { useMutation } from "react-query";
import { api } from "src/api/axios";
import like from "@public/icons/nftpage/like.svg";
import views from "@public/icons/nftpage/views.svg";
import upward from "@public/icons/upward.svg";
import downward from "@public/icons/downward.svg";
import { MARKETPLACE_ADDRESS } from "src/utils/const";

const ItemPage = () => {
    const router = useRouter();
    const itemId = router.query.itemId as string;
    const collectionId = router.query.collectionId as string;
    const nftCollection = useNFTCollection(collectionId);
    const marketplace = useMarketplace(MARKETPLACE_ADDRESS);
    const toast = useToast();
    const [listing, setListings] = useState<
        (AuctionListing | DirectListing) | undefined
    >();
    const [listingLoading, setListingLoading] = useState(false);
    const [loadingBuying, setLoadingBuying] = useState(false);
    const [listingShowed, setListingShowed] = useState(false);
    const [listOffersShowed, setlistOffersShowed] = useState(false);

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
        try {
            setLoadingBuying(true);
            const buyoutRes = await marketplace?.buyoutListing(itemId, 1);

            if (!buyoutRes) throw "Failed to buy";
            const sellData: Omit<
                SellTokenEntityInterface,
                "tokenMetadata" | "contractMetadata"
            > = {
                buyoutCurrencyValuePerToken:
                    listing.buyoutCurrencyValuePerToken,
                buyoutPrice: listing.buyoutPrice,
                contractAddress: listing.assetContractAddress,
                from: buyoutRes?.receipt.from,
                to: buyoutRes?.receipt.to,
                tokenId: listing.tokenId,
                transactionHash: buyoutRes?.receipt.transactionHash,
            };
            api.post("/sell_token/sell", sellData);
            toast({
                title: "Buy success.",
                description: "You've bought NFT!",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            router.push("/collections");
            setLoadingBuying(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container mt="12" maxW="1440px" pb={"200px"}>
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
                        <Flex justifyContent={"space-between"}>
                            <Box>
                                <Heading>{listing?.asset.name}</Heading>
                                <HStack my={4}>
                                    <Image width={30} height={40} src={eth} />
                                    <Text
                                        fontWeight={"extrabold"}
                                        fontSize={"2xl"}
                                    >
                                        {
                                            listing?.buyoutCurrencyValuePerToken
                                                .displayValue
                                        }
                                    </Text>
                                </HStack>
                            </Box>
                            <Flex gap={"30px"}>
                                <Flex alignItems={"center"} gap={"15px"}>
                                    <Image src={views} />
                                    <Box>
                                        <Heading
                                            fontWeight={400}
                                            fontSize={"20px"}
                                            fontFamily={"Inter"}
                                            color={"#828384"}
                                        >
                                            Views
                                        </Heading>
                                        <Text
                                            color={"#1c2529"}
                                            fontWeight={600}
                                            fontSize={"24px"}
                                            mb={0}
                                        >
                                            0
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex alignItems={"center"} gap={"15px"}>
                                    <Image src={like} />
                                    <Box>
                                        <Heading
                                            fontWeight={400}
                                            fontSize={"20px"}
                                            fontFamily={"Inter"}
                                            color={"#828384"}
                                        >
                                            Favorites
                                        </Heading>
                                        <Text
                                            color={"#1c2529"}
                                            fontWeight={600}
                                            fontSize={"24px"}
                                            mb={0}
                                        >
                                            0
                                        </Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
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
                        <ButtonGroup mt={12} h={"80px"} gap={"15px"}>
                            <Button
                                isLoading={loadingBuying}
                                onClick={buyoutListing}
                                w={"250px"}
                                h={"100%"}
                                bg={
                                    "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%) #748E9C"
                                }
                                color={"#fff"}
                                fontSize={"20px"}
                                borderRadius={"0"}
                                fontSize={"16px"}
                            >
                                Buy for{" "}
                                {
                                    listing?.buyoutCurrencyValuePerToken
                                        .displayValue
                                }{" "}
                                ETH
                            </Button>

                            <Button
                                minW={"200px"}
                                h={"100%"}
                                borderRadius={0}
                                border={"2px solid #dedede"}
                                bg={"transparent"}
                            >
                                Make offer
                            </Button>
                        </ButtonGroup>
                        <Text font={"18px 'Inter' 700"} color={"#828384"}>
                            3% comission goes to the charity pool
                        </Text>
                        <Box>
                            <Flex gap={"30px"} alignItems={"center"}>
                                <Center
                                    w={"54px"}
                                    h={"54px"}
                                    onClick={() =>
                                        setListingShowed(!listingShowed)
                                    }
                                    border={"1px solid #dedede"}
                                >
                                    <Image
                                        src={listingShowed ? upward : downward}
                                    />
                                </Center>
                                <Heading>Listing</Heading>
                            </Flex>
                            {listingShowed && (
                                <TableContainer mt={"50px"}>
                                    <Table w={"100%"}>
                                        <Thead>
                                            <Tr>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    Price
                                                </Th>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    USD Price
                                                </Th>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    Expiration
                                                </Th>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    From
                                                </Th>
                                                <Th></Th>
                                            </Tr>
                                        </Thead>

                                        <Tbody>
                                            <Tr>
                                                <Td>
                                                    <Flex
                                                        alignItems={"center"}
                                                        gap={"10px"}
                                                    >
                                                        <Image src={eth} />
                                                        <Text mb={0}>
                                                            0.00001 ETH
                                                        </Text>
                                                    </Flex>
                                                </Td>
                                                <Td>
                                                    <Text>$54689</Text>
                                                </Td>
                                                <Td>
                                                    <Text>26 days</Text>
                                                </Td>
                                                <Td>
                                                    <Text>Binsky</Text>
                                                </Td>
                                                <Td>
                                                    <Button
                                                        border={
                                                            "1px solid #c2d5de"
                                                        }
                                                        borderRadius={0}
                                                        color={"#365262"}
                                                        w={"130px"}
                                                        h={"60px"}
                                                        bg={"transparent"}
                                                    >
                                                        Buy
                                                    </Button>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>
                                                    <Flex
                                                        alignItems={"center"}
                                                        gap={"10px"}
                                                    >
                                                        <Image src={eth} />
                                                        <Text mb={0}>
                                                            0.00001 ETH
                                                        </Text>
                                                    </Flex>
                                                </Td>
                                                <Td>
                                                    <Text>$54689</Text>
                                                </Td>
                                                <Td>
                                                    <Text>26 days</Text>
                                                </Td>
                                                <Td>
                                                    <Text>Binsky</Text>
                                                </Td>
                                                <Td>
                                                    <Button
                                                        border={
                                                            "1px solid #c2d5de"
                                                        }
                                                        borderRadius={0}
                                                        color={"#365262"}
                                                        w={"130px"}
                                                        h={"60px"}
                                                        bg={"transparent"}
                                                    >
                                                        Buy
                                                    </Button>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>
                                                    <Flex
                                                        alignItems={"center"}
                                                        gap={"10px"}
                                                    >
                                                        <Image src={eth} />
                                                        <Text mb={0}>
                                                            0.00001 ETH
                                                        </Text>
                                                    </Flex>
                                                </Td>
                                                <Td>
                                                    <Text>$54689</Text>
                                                </Td>
                                                <Td>
                                                    <Text>26 days</Text>
                                                </Td>
                                                <Td>
                                                    <Text>Binsky</Text>
                                                </Td>
                                                <Td>
                                                    <Button
                                                        border={
                                                            "1px solid #c2d5de"
                                                        }
                                                        borderRadius={0}
                                                        color={"#365262"}
                                                        w={"130px"}
                                                        h={"60px"}
                                                        bg={"transparent"}
                                                    >
                                                        Buy
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            )}
                        </Box>
                        <Box mt={"150px"}>
                            <Flex gap={"30px"} alignItems={"center"}>
                                <Center
                                    w={"54px"}
                                    h={"54px"}
                                    onClick={() =>
                                        setlistOffersShowed(!listOffersShowed)
                                    }
                                    border={"1px solid #dedede"}
                                >
                                    <Image
                                        src={
                                            listOffersShowed ? upward : downward
                                        }
                                    />
                                </Center>
                                <Heading>Offers</Heading>
                            </Flex>
                            {listOffersShowed && (
                                <TableContainer mt={"50px"}>
                                    <Table w={"100%"}>
                                        <Thead>
                                            <Tr>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    Price
                                                </Th>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    USD Price
                                                </Th>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    Floor Difference
                                                </Th>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    Expiration
                                                </Th>
                                                <Th
                                                    color={"#828384"}
                                                    fontWeight={400}
                                                    fontFamily={"Inter"}
                                                    fontSize={"18px"}
                                                >
                                                    From
                                                </Th>
                                            </Tr>
                                        </Thead>

                                        <Tbody>
                                            <Tr>
                                                <Td>
                                                    <Flex
                                                        alignItems={"center"}
                                                        gap={"10px"}
                                                    >
                                                        <Image src={eth} />
                                                        <Text mb={0}>
                                                            0.00001 ETH
                                                        </Text>
                                                    </Flex>
                                                </Td>
                                                <Td>
                                                    <Text>$54689</Text>
                                                </Td>
                                                <Td>
                                                    <Text>59% below</Text>
                                                </Td>
                                                <Td>
                                                    <Text>about 22 hours</Text>
                                                </Td>
                                                <Td>
                                                    <Text
                                                        color={"#6b93a9"}
                                                        fontWeight={700}
                                                        fontSize={"20px"}
                                                        fontFamily={"QtOpt"}
                                                    >
                                                        Binsky
                                                    </Text>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>
                                                    <Flex
                                                        alignItems={"center"}
                                                        gap={"10px"}
                                                    >
                                                        <Image src={eth} />
                                                        <Text mb={0}>
                                                            0.00001 ETH
                                                        </Text>
                                                    </Flex>
                                                </Td>
                                                <Td>
                                                    <Text>$54689</Text>
                                                </Td>
                                                <Td>
                                                    <Text>59% below</Text>
                                                </Td>
                                                <Td>
                                                    <Text>about 22 hours</Text>
                                                </Td>
                                                <Td>
                                                    <Text
                                                        color={"#6b93a9"}
                                                        fontWeight={700}
                                                        fontSize={"20px"}
                                                        fontFamily={"QtOpt"}
                                                    >
                                                        Binsky
                                                    </Text>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Td>
                                                    <Flex
                                                        alignItems={"center"}
                                                        gap={"10px"}
                                                    >
                                                        <Image src={eth} />
                                                        <Text mb={0}>
                                                            0.00001 ETH
                                                        </Text>
                                                    </Flex>
                                                </Td>
                                                <Td>
                                                    <Text>$54689</Text>
                                                </Td>
                                                <Td>
                                                    <Text>59% below</Text>
                                                </Td>
                                                <Td>
                                                    <Text>about 22 hours</Text>
                                                </Td>
                                                <Td>
                                                    <Text
                                                        color={"#6b93a9"}
                                                        fontWeight={700}
                                                        fontSize={"20px"}
                                                        fontFamily={"QtOpt"}
                                                    >
                                                        Binsky
                                                    </Text>
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            )}
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </>
    );
};

export default ItemPage;
