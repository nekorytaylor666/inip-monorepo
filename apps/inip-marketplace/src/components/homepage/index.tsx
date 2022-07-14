import React, {useState, useEffect} from "react";
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
import {api} from "src/api/axios";
import { useQuery } from "react-query";
import {ListingType, PopularType} from "src/types/types";
import { MediaRenderer } from "@thirdweb-dev/react";
import frameLil from "@public/icons/community/frame.png";
import Listing from "@components/collectionOfListing";

export const Container: React.FC = () => {
    const {data: listingsReq, isLoading: listingsLoading} = useQuery<ListingType[]>(
        "newest_listing",
        async () => {
            const res = await api.get("/listings");
            return setListings([...res.data]);
        }
    );

    const {data: getPopularReq, isLoading: getLoading} = useQuery<PopularType[]>(
        "get_popular",
        async () => {
            const res = await api.get("/get_popular");
            return setPopulars([...res.data]);
        }
    );

    const [listings, setListings] = useState<ListingType[]>([]);
    const [populars, setPopulars] = useState<PopularType[]>([]);

    console.log(listings, populars);

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
                p={'0 10%'}
            >
                <Box>
                    <Flex justifyContent={"space-between"}>
                        <Box width={{md: '50%', sm: '100%'}}>
                            <Heading
                                fontFamily={"Swing"}
                                color={"#1C2529"}
                                fontSize={{md: "95px", sm: '60px'}}
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
                            <Flex mt={"70px"} justifyContent={{md: 'flex-start', sm: 'space-between'}}>
                                <Button
                                    width={'45%'}
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
                                    width={'50%'}
                                    minHeight={"80px"}
                                    bg={"none"}
                                    fontSize={"20px"}
                                    color={"#1C2529"}
                                    borderRadius={"0"}
                                    border={"2px solid #DEDEDE"}
                                    marginLeft={{md: 10, sm: 0}}
                                >
                                    Dreams Come True
                                </Button>
                            </Flex>
                        </Box>
                        <Box
                            display={{md: 'block', sm: 'none'}}
                            w={"35%"}
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
                            <Box
                                width={'100%'}
                                height={'100%'}
                                backgroundImage={mainIcon.src}
                                backgroundSize={'cover'}
                                backgroundPosition={'center'}
                            >
                                <img
                                    src={frame.src}
                                    style={{
                                        height: "100%",
                                        width: '100%',
                                        backgroundSize: "100% 100%",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Flex>
                </Box>

                <Box pt={"120px"}>
                    <Box gap={{md: "40px", sm: 0}} height={"205px"} width={"100%"}>
                        <Box width={"100%"}>
                            <Flex justifyContent={"space-between"} flexDir={{md: 'row', sm: 'column'}}>
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
                        </Box>

                        <Flex
                            width={'100%'}
                            height={{md: "50%", sm: '30%'}}
                            alignItems={"center"}
                            marginBottom={40}
                            justifyContent={'space-between'}
                        >
                            <Progress
                                height={"100%"}
                                width={'65%'}
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

                            <Button
                                bg={"#748E9C"}
                                color={"#fff"}
                                height={"100%"}
                                width={"30%"}
                                borderRadius={0}
                            >
                                Contribute
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </Box>

            <Flex
                bg={`url(${dream.src})`}
                flexDirection={"column"}
                p={"40px 10%"}
                color={"white"}
                mt={'10%'}
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
                <Flex gap={"50px"} flexDir={{md: 'row', sm: 'column'}}>
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
                </Flex>
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

            <Flex p={"150px 0"} minH={"750px"} flexDir={"column"}>

                <Box p={"50px 10%"}>
                    <Heading
                        fontFamily={"QtOpt"}
                        fontWeight={700}
                        fontSize={"40px"}
                    >
                        popular collections.
                    </Heading>
                </Box>

                <Listing items={populars}/>
            </Flex>


            <Flex p={"50px 10%"} flexDir={"column"}>

                <Box>
                    <Heading
                        fontFamily={"QtOpt"}
                        fontWeight={700}
                        fontSize={"40px"}
                    >
                        popular listings.
                    </Heading>
                </Box>

            </Flex>
            <Listing items={listings}/>


            <Flex flexDirection={"column"} padding={"10% 10%"} gap={"50px"}>
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

            <Box flexDirection={"column"} p={"0 10%"}>
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
                        mb={10}
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
                        mb={10}
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
                        mb={10}
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
            <Flex flexDirection={"column"} mt={20}>
                <Heading textAlign={'center'} fontWeight={900} fontFamily={"SangSunrise"}>
                    our partners.
                </Heading>
                <Partners partners={partners} />
            </Flex>
        </Box>
    );
};
