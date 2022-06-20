import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Box,
    ButtonGroup,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Skeleton,
    Square,
    Text,
    VStack,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Textarea
    // Image
} from "@chakra-ui/react";
import community from "@public/icons/community/community.jpg";
import frame from "@public/icons/community/frame.png";
import inip from "@public/icons/community/inipicon.svg";
import reward from "@public/icons/community/reward.svg";


const Community = () => {


    return (
        <Box
        >
            <Box
                bgImage={community.src}
                bgPosition={"top"}
                bgSize={"cover"}
                h={"815px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Center
                    minW={"910px"}
                    minH={"508px"}
                    bg={"GrayText"}
                    justifyContent={"center"}
                >
                    <Center
                        flexDir={"column"}
                        color={"#fff"}
                        gap={"35px"}
                    >
                        <Text
                            maxW={"580px"}
                            maxH={"192px"}
                            fontSize={"44px"}
                            fontWeight={400}
                            fontFamily={"Swing"}
                            textAlign={"center"}
                        >
                            I alone cannot change  
                            the world but I can cast  
                            a stone across the waters  
                            to create many ripples
                        </Text>
                        <Button
                            border={"2px solid #dedede"}
                            borderRadius={0}
                            bg={"rgba(255, 255, 255, 0.2)"}
                            minW={"161px"}
                            minH={"59px"}
                        >
                            Opportunities
                        </Button>
                    </Center>
                </Center>
            </Box>

            <Box
                minH={"444px"}
                w={"100%"}
                p={"0 200px"}
                position={"relative"}
                bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(167, 194, 211, 0) 100%), #6C8693"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
            >
                <img
                    src={inip.src}
                    style={
                        {position: "absolute"}
                    }
                />
                <Flex
                    flexDir={"column"}
                    gap={"20px"}
                    color={"#fff"}
                >
                    <Heading>in 1 percent.</Heading>
                    <Text maxW={"520px"} fontSize={"18px"}>
                        1 percent of the population or otherwise - a community  
                        created to unite individuals who are ready to change the world,  
                        improve it and make history.
                    </Text>
                </Flex>
            </Box>

            <Box p={"110px 200px"}>

                <Heading color={"#365262"} fontFamily={"QtOpt"}>community levels.</Heading>

                <Flex gap={"54px"} color={"#fff"} justifyContent={"space-between"} p={"45px 0 65px"}>
                    <Flex
                        minH={"644px"}
                        minW={"465px"}
                        p={"40px"}
                        justifyContent={"space-between"}
                        bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(167, 194, 211, 0) 100%), #6C8693"}
                        flexDir={"column"}
                    >
                        <Box minH={"160px"}>
                            <Text fontFamily={"QtOpt"} fontSize={"24px"} fontWeight={900}>how to join?</Text>
                            <UnorderedList>
                                <ListItem>
                                    Free joining
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box minH={"180px"}>
                            <Text fontFamily={"QtOpt"} fontSize={"24px"} fontWeight={900}>rights</Text>
                            <UnorderedList>
                                <ListItem>Chatting with other members</ListItem>
                            </UnorderedList>
                        </Box>

                        <Button
                            w={"186px"}
                            h={"74px"}
                            border={"2px solid #dedede"}
                            borderRadius={0}
                            bg={"rgba(255, 255, 255, 0.2)"}
                        >
                            Back
                        </Button>
                    </Flex>
                    <Flex
                        minH={"644px"}
                        minW={"465px"}
                        p={"40px"}
                        justifyContent={"space-between"}
                        bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(167, 194, 211, 0) 100%), #6C8693"}
                        flexDir={"column"}
                    >
                        <Box minH={"160px"}>
                            <Text fontFamily={"QtOpt"} fontSize={"24px"} fontWeight={900}>how to join?</Text>
                            <UnorderedList>
                                <ListItem>Invites </ListItem>
                                <ListItem>Whitelists  </ListItem>
                                <ListItem>Kindness rating </ListItem>
                                <ListItem>Dreams </ListItem>
                                <ListItem>Act of kindness</ListItem>

                            </UnorderedList>
                        </Box>
                        <Box minH={"180px"}>
                            <Text fontFamily={"QtOpt"} fontSize={"24px"} fontWeight={900}>rights</Text>
                            <UnorderedList>
                                <ListItem>Chatting with others</ListItem>
                                <ListItem>Selecting charity projects</ListItem>
                                <ListItem>Voting in the democratic rating rating</ListItem>
                            </UnorderedList>
                        </Box>

                        <Button
                            w={"186px"}
                            h={"74px"}
                            border={"2px solid #dedede"}
                            borderRadius={0}
                            bg={"rgba(255, 255, 255, 0.2)"}
                        >
                            Back
                        </Button>
                    </Flex>
                    <Flex
                        minH={"644px"}
                        minW={"465px"}
                        p={"40px"}
                        justifyContent={"space-between"}
                        bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(167, 194, 211, 0) 100%), #6C8693"}
                        flexDir={"column"}
                    >
                        <Box minH={"160px"}>
                            <Text fontFamily={"QtOpt"} fontSize={"24px"} fontWeight={900}>how to join?</Text>
                            <UnorderedList>
                                <ListItem>Voting</ListItem>
                                <ListItem>Special invites</ListItem>
                            </UnorderedList>

                        </Box>
                        <Box minH={"180px"}>
                            <Text fontFamily={"QtOpt"} fontSize={"24px"} fontWeight={900}>rights</Text>
                            <UnorderedList>
                                <ListItem>Chatting with others</ListItem>
                                <ListItem>Selecting charity projects</ListItem>
                                <ListItem>Make offers regarding projects</ListItem>
                                <ListItem>Voting in the democratic rating rating</ListItem>
                                <ListItem>Selecting creators for support</ListItem>
                            </UnorderedList>
                        </Box>

                        <Button
                            w={"186px"}
                            h={"74px"}
                            border={"2px solid #dedede"}
                            borderRadius={0}
                            bg={"rgba(255, 255, 255, 0.2)"}
                        >
                            Back
                        </Button>

                    </Flex>
                </Flex>

                <Center>

                    <Button
                        border={"1px solid #c2d5de"}
                        borderRadius={0}
                        minH={"74px"}
                        minW={"316px"}
                        bg={"transparent"}
                        color={"#365262"}
                    >
                        Join the Community
                    </Button>
                </Center>
            </Box>

            <Box
                p={"60px 200px 80px"}
                bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(167, 194, 211, 0) 100%), #6C8693"}
                color={"#fff"}
            >

                <Heading>rewards.</Heading>

                <Flex pt={"50px"}>
                    <Flex
                        flexWrap={"wrap"}
                        gap={"20px"}
                    >
                        <Flex
                            w={"47%"}
                            minH={"190px"}
                            flexDir={"column"}
                            border={"1px solid #b1d0d8"}
                            p={"35px"}
                            gap={"25px"}
                        >
                            <Heading>
                                Surrounding one in a billion
                            </Heading>

                            <Text maxW={"400px"}>
                                Get into the top 50 and get access to a community 
                                that will change the whole world!
                            </Text>
                        </Flex>
                        <Flex
                            w={"47%"}
                            minH={"190px"}
                            flexDir={"column"}
                            border={"1px solid #b1d0d8"}
                            p={"35px"}
                            gap={"25px"}
                        >
                            <Heading>
                                AirDrops & Private Sales
                            </Heading>

                            <Text maxW={"400px"}>
                                Get into the top 50 and get access to a community 
                                that will change the whole world!
                            </Text>
                        </Flex>
                        <Flex
                            w={"47%"}
                            minH={"190px"}
                            flexDir={"column"}
                            border={"1px solid #b1d0d8"}
                            p={"35px"}
                            gap={"25px"}
                        >
                            <Heading>
                                Private Events
                            </Heading>

                            <Text maxW={"400px"}>
                                Get into the top 50 and get access to a community 
                                that will change the whole world!
                            </Text>
                        </Flex>
                        <Flex
                            w={"47%"}
                            minH={"190px"}
                            flexDir={"column"}
                            border={"1px solid #b1d0d8"}
                            p={"35px"}
                            gap={"25px"}
                        >
                            <Heading>
                                Other bonuses
                            </Heading>

                            <Text maxW={"400px"}>
                                Get into the top 50 and get access to a community 
                                that will change the whole world!
                            </Text>
                        </Flex>

                    </Flex>
                    <Flex
                        alignItems={"center"}
                    >
                        <Image src={reward}/>
                    </Flex>
                </Flex>
            </Box>

            <Center
                p={"110px 200px 150px"}
            >
                <Flex
                    flexDir={"column"}
                    gap={"50px"}
                >
                    <Heading>answer one question.</Heading>

                    <Box
                        minW={"910px"}
                    >
                        <Text>If you had endless possibilities, what would you bring the world?</Text>
                        <Textarea 
                            placeholder={"Write something here"} 
                            minH={"300px"}
                            w={"100%"}
                            p={"40px"}
                            borderRadius={0}
                            resize={"none"}
                            border={"1px solid #b1d0d8"}
                        />
                        <Flex
                            justifyContent={"end"}
                            borderBottom={"1px solid #b1d0d8"}
                            borderLeft={"1px solid #b1d0d8"}
                        >
                            <Button
                                w={"195px"}
                                minH={"79px"}
                                color={"#fff"}
                                borderRadius={0}
                                bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(167, 194, 211, 0) 100%), #6C8693"}
                            >
                                Send
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Center>
        </Box>
    );

}

export default Community;