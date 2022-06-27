import React, {useState} from "react";
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
                            <Image src={profile}/>
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
                                <Box minH={"100%"} border={"1px solid #d9d9d9"}></Box>
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
                                bg={"radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #748E9C"}
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
                                        <Image src={twitter}/>
                                    </a>
                                </Link>
                                <Link href="/12">
                                    <a>
                                        <Image src={discord}/>
                                    </a>
                                </Link>
                            </Flex>
                        </Flex>
                        <Flex gap={"85px"}>
                            <Box

                            >
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
                                Animator who likes to animate doodles. Animator who likes to animate doodles.  
                                Animator who likes to animate doodles. Animator who likes to animate doodles.  
                                Animator who likes to animate doodles.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Box>
                <Flex minH={"75px"} justifyContent={"space-between"}>
                    <Flex>

                        <Center minW={"120px"}
                            onClick={() => setCategory("creations")}
                            color={category === "creations" ? "#000" : "#979391"}
                            border={category === "creations" ? "1px solid #d9d9d9" : ""}
                        >
                            Creations
                        </Center>
                        <Center minW={"120px"}
                            onClick={() => setCategory("nfts")}
                            color={category === "nfts" ? "#000" : "#979391"}
                            border={category === "nfts" ? "1px solid #d9d9d9" : ""}
                        >
                            NFTs
                        </Center>
                        <Center minW={"120px"}
                            onClick={() => setCategory("dreams")}
                            color={category === "dreams" ? "#000" : "#979391"}
                            border={category === "dreams" ? "1px solid #d9d9d9" : ""}
                        >
                            Dreams
                        </Center>
                        <Center minW={"120px"}
                            onClick={() => setCategory("hidden")}
                            color={category === "hidden" ? "#000" : "#979391"}
                            border={category === "hidden" ? "1px solid #d9d9d9" : ""}
                        >
                            Hidden
                        </Center>
                        <Center minW={"120px"}
                            onClick={() => setCategory("favorites")}
                            color={category === "favorites" ? "#000" : "#979391"}
                            border={category === "favorites" ? "1px solid #d9d9d9" : ""}
                        >
                            Favorites
                        </Center>
                    </Flex>

                    <Center minW={"120px"}
                        onClick={() => setCategory("activity")}
                        color={category === "activity" ? "#000" : "#979391"}
                        border={category === "activity" ? "1px solid #d9d9d9" : ""}
                    >
                        Activity
                    </Center>
                </Flex>
            </Box>

        </Box>
    );
}



export default Profile;