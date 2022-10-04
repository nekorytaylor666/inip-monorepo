import React, { useEffect, useState } from "react";
import {
    AspectRatio,
    Flex,
    Box,
    Center,
    Text,
    Heading,
    Square,
    Button,
    ButtonGroup,
    Progress,
    LinkBox,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Spinner,
    SimpleGrid,
    useToast,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import twitter from "@public/icons/profile/twitter.svg";
import discord from "@public/icons/profile/discord.svg";
import profile from "@public/icons/profile/profile.jpg";
import { MediaRenderer, useAddress, useMarketplace } from "@thirdweb-dev/react";
import axios from "axios";
import { api } from "src/api/axios";
import { useQuery } from "react-query";
import { OwnedNft, OwnedNftsResponse } from "@alch/alchemy-sdk";
import { truncateString } from "src/utils/helpers";
import {
    DREAMS_COME_TRUE_COLLECTION_ADDRESS,
    MARKETPLACE_ADDRESS,
} from "src/utils/const";
import { sdk } from "src/api/thirdweb";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { withWalletAuth } from "src/HOC/withWalletAuth";

const Profile = () => {
    return (
        <Box p={"100px 200px"}>
            <Box pb={"70px"}>
                <Heading>profile.</Heading>
                <Flex pt={"40px"} gap={"55px"}>
                    <Flex flexDir={"column"} gap={"35px"} maxW={"259px"}>
                        <Box maxH={"259px"}>
                            <Image src={profile} />
                        </Box>
                        <Flex flexDir={"column"} gap={"20px"}>
                            <Flex justifyContent={"space-between"}>
                                <Box>
                                    <Text
                                        mb={0}
                                        fontFamily={"Inter"}
                                        color={"#979391"}
                                        fontSize={"20px"}
                                        fontWeight={500}
                                    >
                                        Followers
                                    </Text>
                                    <Text
                                        fontFamily={"Inter"}
                                        color={"#000"}
                                        fontSize={"20px"}
                                        fontWeight={600}
                                    >
                                        248 645
                                    </Text>
                                </Box>
                                <Box
                                    minH={"100%"}
                                    border={"1px solid #d9d9d9"}
                                ></Box>
                                <Box>
                                    <Text
                                        mb={0}
                                        fontFamily={"Inter"}
                                        color={"#979391"}
                                        fontSize={"20px"}
                                        fontWeight={500}
                                    >
                                        Following
                                    </Text>
                                    <Text
                                        fontFamily={"Inter"}
                                        color={"#000"}
                                        fontSize={"20px"}
                                        fontWeight={600}
                                    >
                                        54
                                    </Text>
                                </Box>
                            </Flex>
                            <Button
                                w={"100%"}
                                minH={"74px"}
                                bg={
                                    "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #748E9C"
                                }
                                color={"#fff"}
                                borderRadius={0}
                            >
                                Follow
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex
                        maxH={"400px"}
                        flexDir={"column"}
                        justifyContent={"space-between"}
                    >
                        <Flex justifyContent={"space-between"}>
                            <Heading
                                fontWeight={700}
                                fontSize={"26px"}
                                fontFamily={"QtOpt"}
                            >
                                JOJO54678
                            </Heading>
                            <Flex gap={"50px"}>
                                <Link href="/21">
                                    <a>
                                        <Image src={twitter} />
                                    </a>
                                </Link>
                                <Link href="/12">
                                    <a>
                                        <Image src={discord} />
                                    </a>
                                </Link>
                            </Flex>
                        </Flex>
                        <Flex gap={"85px"}>
                            <Box>
                                <Text
                                    mb={0}
                                    fontFamily={"Inter"}
                                    color={"#979391"}
                                    fontSize={"20px"}
                                    fontWeight={400}
                                >
                                    Collections
                                </Text>
                                <Text
                                    fontFamily={"Inter"}
                                    color={"#000"}
                                    fontSize={"30px"}
                                    fontWeight={600}
                                >
                                    24
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    mb={0}
                                    fontFamily={"Inter"}
                                    color={"#979391"}
                                    fontSize={"20px"}
                                    fontWeight={400}
                                >
                                    Creations
                                </Text>
                                <Text
                                    fontFamily={"Inter"}
                                    color={"#000"}
                                    fontSize={"30px"}
                                    fontWeight={600}
                                >
                                    34
                                </Text>
                            </Box>
                        </Flex>
                        <Box>
                            <Text
                                mb={0}
                                fontFamily={"Inter"}
                                color={"#979391"}
                                fontSize={"20px"}
                                fontWeight={400}
                            >
                                Description
                            </Text>
                            <Text
                                fontFamily={"Inter"}
                                color={"#000"}
                                fontSize={"20px"}
                                fontWeight={600}
                            >
                                Animator who likes to animate doodles. Animator
                                who likes to animate doodles. Animator who likes
                                to animate doodles. Animator who likes to
                                animate doodles. Animator who likes to animate
                                doodles.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Box>
                <Tabs w="full" variant="unstyled">
                    <TabList>
                        {/* <ProfileTab>Creations</ProfileTab> */}
                        <ProfileTab>NFTs</ProfileTab>
                        <ProfileTab>Dreams</ProfileTab>
                        {/* <ProfileTab>Hidden</ProfileTab> */}
                        {/* <ProfileTab>Favorites</ProfileTab> */}
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <NFTGrid />
                        </TabPanel>
                        <TabPanel>
                            <NFTGrid
                                tokenAddress={
                                    DREAMS_COME_TRUE_COLLECTION_ADDRESS
                                }
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

const NFTGrid = ({ tokenAddress }: { tokenAddress?: string }) => {
    const walletAddress = useAddress();
    console.log(!!walletAddress);
    const { data, isLoading } = useQuery(
        `nftsByOwner:${walletAddress}`,
        async () => {
            const res = await axios.get<OwnedNftsResponse>(
                `/api/nfts-by-ownr/${walletAddress}`,
            );
            return res.data;
        },
        {
            enabled: !!walletAddress,
        },
    );
    if (isLoading) return <Spinner></Spinner>;

    const items = data?.ownedNfts;
    const filteredItem = items?.filter((el) => {
        //!TODO: NOT SAFE CODE!!! We should send issue to alchemy and thirdweb that contract address of one contract differs on their platforms
        return (
            !tokenAddress ||
            el.contract.address.toLowerCase() === tokenAddress.toLowerCase()
        );
    });
    return (
        <SimpleGrid columns={[3]} gap={8}>
            {filteredItem?.map((el) => (
                <OwnedNFTItem item={el}></OwnedNFTItem>
            ))}
        </SimpleGrid>
    );
};

const OwnedNFTItem = ({ item }: { item: OwnedNft }) => {
    const toast = useToast();
    const marketplace = useMarketplace(MARKETPLACE_ADDRESS);
    const [listingLoading, setListingLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const { values, handleChange } = useFormik({
        initialValues: { price: 0 },
        onSubmit() {
            console.log();
        },
    });
    const onListingClick = async () => {
        try {
            setListingLoading(true);
            const listing = {
                assetContractAddress: item.contract.address,
                // token ID of the asset you want to list
                tokenId: item.tokenId,
                // when should the listing open up for offers
                startTimestamp: new Date(),
                // how long the listing will be open for
                listingDurationInSeconds: 86400,
                // how many of the asset you want to list
                quantity: 1,
                // address of the currency contract that will be used to pay for the listing
                currencyContractAddress: NATIVE_TOKEN_ADDRESS,
                // how much the asset will be sold for
                buyoutPricePerToken: values.price,
            };
            const listingRes = await marketplace?.direct.createListing(listing);
            api.post("/addListing", { listingId: listingRes?.id });
            toast({
                title: "Listing created.",
                description: "We've created listing on our marketplace.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            setListingLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Box>
                <Box>
                    <MediaRenderer
                        style={{ objectFit: "cover", width: 500, height: 500 }}
                        src={item.rawMetadata?.image}
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
                            {item.rawMetadata?.name}
                        </Text>
                        <Button
                            isLoading={listingLoading}
                            onClick={onOpen}
                            variant={"outline"}
                        >
                            List
                        </Button>
                    </Flex>
                    <Flex alignItems={"center"} color={"#1C2529"}>
                        <Text
                            flex={1}
                            noOfLines={2}
                            fontSize={"14px"}
                            fontWeight={500}
                        ></Text>
                        <Text
                            fontSize={"14px"}
                            textAlign={"end"}
                            flex={1}
                        ></Text>
                    </Flex>
                </Flex>
            </Box>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Heading fontSize={"2xl"}>Listing Details</Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Listing price</FormLabel>
                            <Input
                                name="price"
                                onChange={handleChange}
                                ref={initialRef}
                                placeholder="Listing price"
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            isLoading={listingLoading}
                            onClick={onListingClick}
                            mr={3}
                        >
                            List
                        </Button>
                        <Button
                            disabled={listingLoading}
                            colorScheme={"red"}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

const ProfileTab: React.FC = ({ children }) => (
    <Tab
        minH={"75px"}
        minW={"120px"}
        _selected={{ border: "1px solid #d9d9d9", color: "#000" }}
    >
        {children}
    </Tab>
);

Profile.isProtected = true;

export default withWalletAuth(Profile);
