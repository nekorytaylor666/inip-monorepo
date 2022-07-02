import React from "react";
import {
    AspectRatio,
    Flex,
    Box,
    Center,
    Text,
    Heading,
    Button,
    ButtonGroup,
    Progress,
} from "@chakra-ui/react";
import Image from "next/image";
import mainIcon from "@public/icons/homepage/mainIcon.svg";
import dream from "@public/icons/homepage/latest_dreams.jpg";
import henocyde from "@public/icons/homepage/henocyde.jpg";
import louvre from "@public/icons/homepage/louvre.jpg";
import eth from "@public/icons/homepage/ethereum.svg";
import charityImg from "@public/icons/homepage/charity.jpg";
import kindnessImg from "@public/icons/homepage/kindness.jpg";
import { Collection } from "@components/nftCollection";
import { Rating } from "../rating/index";
import world from "@public/icons/homepage/charityWorld.svg";
import frame from "@public/icons/community/frame.png";
import Benefits from "@components/benefits";
import Partners from "@components/partners";

export const Container: React.FC = () => {
    const dreams = [
        {
            id: "1",
            image: henocyde,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            description:
                "Hey! My name is Amelia. I have a dream to be a singer!",
        },
        {
            id: "2",
            image: henocyde,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            description:
                "Hey! My name is Amelia. I have a dream to be a singer!",
        },
        {
            id: "3",
            image: henocyde,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            description:
                "Hey! My name is Amelia. I have a dream to be a singer!",
        },
    ];

    const collection = [
        {
            id: "1",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },
        {
            id: "2",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },
        {
            id: "3",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },
        {
            id: "4",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },
        {
            id: "5",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },
    ];

    const charity = [
        {
            id: "1",
            image: charityImg,
            title: "Charity Projects",
            description:
                "There is a 3% comission in each transaction. Commission from each purchase and resale of NFT will be donated to charitable projects",
        },
        {
            id: "2",
            image: charityImg,
            title: "Personal Dreams",
            description:
                "Everyone has a dream. Make them come true with us. To do this, you have to upload an NFT with a detailed description of your dream, and indicate the price.",
        },
        {
            id: "3",
            image: charityImg,
            title: "Creator Support",
            description:
                "Are you the NFT creator? Submit your candidacy, and perhaps it is you who will receive full financial and promotional support from the INIP Marketplace.",
        },
        {
            id: "4",
            image: charityImg,
            title: "Community",
            description:
                "The community will be selected like-minded people from different areas with the same goals - to improve the world. It will also play a key role in the selection of charity projects and future artists.",
        },
    ];

    const kindness = [
        {
            id: "1",
            image: kindnessImg,
            author: "Binsky",
            rating: 5468,
        },
        {
            id: "2",
            image: kindnessImg,
            author: "Ben",
            rating: 5468,
        },
        {
            id: "3",
            image: kindnessImg,
            author: "Henocyde",
            rating: 5468,
        },
    ];

    const videos = [
        <iframe src={"https://www.youtube.com/embed/QhBnZ6NPOY0"} />,
        <iframe src={"https://www.youtube.com/embed/QhBnZ6NPOY0"} />,
        <iframe src={"https://www.youtube.com/embed/QhBnZ6NPOY0"} />,
        <iframe src={"https://www.youtube.com/embed/QhBnZ6NPOY0"} />,
    ];

    const partners = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <Box mt={"100px"}>
            <Box
                display="flex"
                justifyContent={"space-between"}
                flexDirection={"column"}
                p={"0 200px 150px"}
            >
                <Box>
                    <Flex justifyContent={"space-between"}>
                        <Box maxWidth={"680px"}>
                            <Heading
                                fontFamily={"Swing"}
                                color={"#1C2529"}
                                fontSize={"95px"}
                                fontWeight={"400"}
                                lineHeight={"103.05%"}
                            >
                                Make the world better with NFTs
                            </Heading>
                            <Text
                                fontFamily={"Inter"}
                                fontWeight={"500"}
                                fontSize={"20px"}
                                color={"#AAAAAA"}
                            >
                                Be part of the first Charity NFT Marketplace
                                around the world.
                            </Text>
                            <ButtonGroup gap={"14px"} mt={"70px"}>
                                <Button
                                    minWidth={"221px"}
                                    minHeight={"80px"}
                                    bg={
                                        "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%) #748E9C"
                                    }
                                    color={"#fff"}
                                    fontSize={"20px"}
                                    borderRadius={"0"}
                                >
                                    Start collecting
                                </Button>

                                <Button
                                    minWidth={"221px"}
                                    minHeight={"80px"}
                                    bg={"none"}
                                    fontSize={"20px"}
                                    color={"#1C2529"}
                                    borderRadius={"0"}
                                    border={"2px solid #DEDEDE"}
                                >
                                    Dreams Come True
                                </Button>
                            </ButtonGroup>
                        </Box>
                        <Box
                            minH={"620px"}
                            maxW={"540px"}
                            position={"relative"}
                        >
                            <Flex
                                fontFamily={"QtOpt"}
                                justifyContent={"space-between"}
                            >
                                <Flex gap={"5px"}>
                                    <Text mb={0}>BY</Text>{" "}
                                    <Text mb={0} fontWeight={"bold"}>
                                        BINSKY
                                    </Text>
                                </Flex>
                                <Text mb={0} fontWeight={"bold"}>
                                    HENOCYDE
                                </Text>
                            </Flex>
                            <img
                                src={frame.src}
                                style={{
                                    minHeight: "620px",
                                    backgroundSize: "100% 100%",
                                }}
                            />
                            <img
                                src={mainIcon.src}
                                style={{
                                    position: "absolute",
                                    top: "10%",
                                    zIndex: "0",
                                    width: "87%",
                                    left: "6.5%",
                                }}
                            />
                        </Box>
                    </Flex>
                </Box>

                <Box pt={"120px"}>
                    <Center gap={"40px"} height={"205px"} width={"100%"}>
                        <Box width={"100%"}>
                            <Flex justifyContent={"space-between"}>
                                <Flex gap={"40px"} pb={"20px"}>
                                    <Box>
                                        <Heading
                                            fontFamily={"QtOpt"}
                                            fontWeight={700}
                                        >
                                            charity pool.
                                        </Heading>
                                        <Text
                                            m={0}
                                            fontFamily={"Inter"}
                                            fontWeight={700}
                                        >
                                            project “Make Africa green again”
                                        </Text>
                                    </Box>
                                    <Image src={world} />
                                </Flex>
                                <Box
                                    display={"flex"}
                                    alignItems={"end"}
                                    gap={"3px"}
                                >
                                    <Text>Goal:</Text>
                                    <Text fontFamily={"Inter"} fontWeight={600}>
                                        3.000.000$
                                    </Text>
                                </Box>
                            </Flex>

                            <Progress
                                height={"90px"}
                                value={18}
                                colorScheme={
                                    "linear-gradient(90deg, #6C8693 -15.57%, #A7C2D3 117.18%)"
                                }
                                sx={{
                                    div: {
                                        background:
                                            "linear-gradient(90deg, #6C8693 -15.57%, #A7C2D3 117.18%)",
                                    },
                                }}
                                position={"relative"}
                            >
                                <Box position={"absolute"}>18%</Box>
                            </Progress>
                        </Box>

                        <Flex
                            height={"100%"}
                            minWidth={"200px"}
                            alignItems={"end"}
                        >
                            <Flex
                                width={"100%"}
                                height={"50%"}
                                alignItems={"center"}
                            >
                                <Button
                                    bg={"#748E9C"}
                                    color={"#fff"}
                                    height={"100%"}
                                    width={"100%"}
                                    borderRadius={0}
                                >
                                    Contribute
                                </Button>
                            </Flex>
                        </Flex>
                    </Center>
                </Box>
            </Box>

            <Flex
                bg={`url(${dream.src})`}
                flexDirection={"column"}
                p={"40px 200px"}
                color={"white"}
            >
                <Box>
                    <Heading
                        fontFamily={"QtOpt"}
                        fontWeight={700}
                        fontSize={"40px"}
                    >
                        latest dreams
                    </Heading>
                    <Text
                        fontFamily={"Inter"}
                        fontWeight={700}
                        fontSize={"20px"}
                    >
                        List your dream and let others realize it!
                    </Text>
                </Box>
                <Center gap={"50px"}>
                    {dreams.map((item) => {
                        return (
                            <Box maxWidth={"465px"} key={item.id}>
                                <Image src={item.image} />
                                <Flex
                                    color={"#1C2529"}
                                    mt={"28px"}
                                    justifyContent={"space-between"}
                                    bg={"#fff"}
                                    p={"20px 15px 0"}
                                    mt={"0"}
                                >
                                    <Box maxWidth={"190px"}>
                                        <Heading
                                            fontFamily={"QtOpt"}
                                            fontSize={"24px"}
                                            fontWeight={700}
                                        >
                                            {item.title}
                                        </Heading>
                                        <Text
                                            fontSize={"14px"}
                                            fontWeight={700}
                                        >
                                            {item.description}
                                        </Text>
                                    </Box>
                                    <Box fontFamily={"Inter"} color={"#1C2529"}>
                                        <Flex
                                            fontSize={"22px"}
                                            fontWeight={700}
                                            justifyContent={"flex-end"}
                                            gap={"10px"}
                                        >
                                            {item.price}
                                            <Image src={eth} />
                                        </Flex>
                                        <Text
                                            fontFamily={"Inter"}
                                            fontWeight={700}
                                        >
                                            Last price {item.lastPrice} ETH
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        );
                    })}
                </Center>
                <Flex justifyContent={"center"}>
                    <Button
                        backgroundColor={"rgba(255, 255, 255, 0.1)"}
                        border={"1px solid #DEDEDE"}
                        minWidth={"316px"}
                        maxWidth={"316px"}
                        minHeight={"80px"}
                        mt={"40px"}
                    >
                        Check more
                    </Button>
                </Flex>
            </Flex>

            <Flex flexDirection={"column"} p={"40px 200px"}>
                <Box>
                    <Heading fontFamily={"QtOpt"} fontSize={"46px"}>
                        louvre.
                    </Heading>
                    <Text fontWeight={700}>
                        Explore our Louvre and collect digital art.
                    </Text>
                </Box>
                <Collection collection={collection} />
                <Flex justifyContent={"center"}>
                    <Button
                        background={"rgba(255, 255, 255, 0.1)"}
                        border={"1px solid #DEDEDE"}
                        minWidth={"316px"}
                        maxWidth={"316px"}
                        minHeight={"80px"}
                        mt={"40px"}
                    >
                        Check more
                    </Button>
                </Flex>
            </Flex>

            <Flex flexDirection={"column"} padding={"0 200px"} gap={"50px"}>
                <Box>
                    <Heading fontFamily={"SangSunrise"} fontWeight={700}>
                        our benefits.
                    </Heading>
                    <Text fontWeight={600}>
                        With your every action on the marketplace, the world is
                        getting better.
                    </Text>
                </Box>
                <Benefits charity={charity} />
            </Flex>

            <Box flexDirection={"column"} p={"120px 200px 50px"}>
                <Box>
                    <Heading fontFamily={"SangSunrise"} fontWeight={700}>
                        kindness rating.
                    </Heading>
                    <Text fontWeight={600} color={"#1C2529"} fontSize={"20px"}>
                        Compete not for wealth, but for good deeds.
                    </Text>
                </Box>

                <Box pt={"60px"} width={"100%"}>
                    <Heading
                        fontFamily={"QtOpt"}
                        fontWeight={700}
                        color={"#476676"}
                    >
                        Quantitative
                    </Heading>
                    <Rating ratings={kindness} />
                </Box>

                <Box pt={"60px"} width={"100%"}>
                    <Heading
                        fontFamily={"QtOpt"}
                        fontWeight={700}
                        color={"#476676"}
                    >
                        Financial
                    </Heading>
                    <Rating ratings={kindness} />
                </Box>

                <Box pt={"60px"} width={"100%"}>
                    <Heading
                        fontFamily={"QtOpt"}
                        fontWeight={700}
                        color={"#476676"}
                    >
                        Democratic
                    </Heading>
                    <Rating ratings={kindness} />
                </Box>
                <Flex justifyContent={"center"}>
                    <Button
                        background={"rgba(255, 255, 255, 0.1)"}
                        border={"1px solid #DEDEDE"}
                        minWidth={"316px"}
                        minHeight={"80px"}
                        mt={"40px"}
                    >
                        Check more
                    </Button>
                </Flex>
            </Box>
            <Flex flexDirection={"column"} p={"50px 0 150px"}>
                <Heading fontWeight={900} fontFamily={"SangSunrise"}>
                    our partners.
                </Heading>
                <Partners partners={partners} />
            </Flex>
        </Box>
    );
};
