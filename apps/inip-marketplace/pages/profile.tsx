import React, { useState } from "react";
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
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import twitter from "@public/icons/profile/twitter.svg";
import discord from "@public/icons/profile/discord.svg";
import profile from "@public/icons/profile/profile.jpg";

const Profile = () => {
    const [category, setCategory] = useState("creations");

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
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

const NFTGrid = () => {
    return <></>;
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
export default Profile;
