import React, {useState} from "react";
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
    Checkbox
} from "@chakra-ui/react";
import henocyde from "@public/icons/homepage/henocyde.jpg";
import eth from "@public/icons/homepage/ethereum.svg";
import upward from "@public/icons/upward.svg";
import downward from "@public/icons/downward.svg";



const Dreams = () => {

    const [showCriteria, setShowCriteria] = useState(false);

    const dreams = [
        {
            id: "1",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "2",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "3",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "4",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "5",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "6",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        },
        {
            id: "7",
            author: "Binsky",
            name: "HENOCYDE",
            desc: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem, Lorem ipsum loremLorem ipsum lorem, Lorem ipsum lorem",
            price: 5468,
            img: henocyde,
        }
    ];

    return (
        <Box>

            <Box p={"120px 200px 0"} color={"#1c2529"}>
                <Heading fontFamily={"Swing"} fontSize={"140px"} fontWeight={400} >Dreams</Heading>
                <Text 
                    maxW={"470px"}
                    fontFamily={"Inter"} 
                    fontSize={"20px"} 
                    fontWeight={500} 
                    color={"#aaa"}
                    pb={"40px"}
                >
                    Collect, sell and buy NFT's from the best creators around the world. Just in clicks
                </Text>
                <Button 
                    minW={"220px"} 
                    minH={"74px"}
                    border={"2px solid #dedede"}
                    bg={"transparent"}
                    borderRadius={0}
                >
                    About
                </Button>
            </Box>

            <Box 
                mt={"180px"}
                pb={"150px"}    
                p={"0 200px"}
            >
                <Flex
                    pb={"30px"}
                >
                    <Box
                        minW={"45px"}
                        position={"relative"}
                    >
                        <Image 
                            src={showCriteria ? upward : downward}
                            onClick={() => setShowCriteria(!showCriteria)}
                        />

                        {!showCriteria && <Flex
                            flexDir={"column"}
                            gap={"30px"}
                            position={"absolute"} 
                            zIndex={1}
                            bg={"#fff"}
                            p={"100px 70px 100px"}
                            mt={"30px"}
                            border={"1px solid #d9d9d9"}  
                            color={"#1c2529"}
                            fontSize={"20px"}
                            fontWeight={400}  
                        >
                            <Checkbox size={"md"} gap={"30px"}>
                                New
                            </Checkbox>
                            <Checkbox  size={"md"} gap={"30px"}>
                                In progress
                            </Checkbox>
                            <Checkbox  size={"md"} gap={"30px"}>
                                Succeed
                            </Checkbox>
                        </Flex>}
                    </Box>

                    <Box>
                        All dreams
                    </Box>
                </Flex>
                <Flex
                    flexWrap={"wrap"}
                    gap={"45px"}
                >
                    {dreams.map((item, index) => {

                        return <Box 
                                key={item.id}
                                minH={"647px"}
                                maxW={"465px"}
                            >
                                <Image src={item.img}/>
                                <Flex 
                                    pt={"10px"} 
                                    justifyContent={"space-between"}
                                    color={"#1c2529"}
                                    alignItems={"center"}
                                >
                                    <Heading fontSize={"20px"} fontWeight={700} fontFamily={"QtOpt"}>{item.name}</Heading>
                                    <Flex
                                        fontWeight={600}
                                        fontFamily={"Inter"}
                                        fontSize={"24px"}
                                        gap={"12px"}
                                    >
                                        5468
                                        <Image src={eth}/>
                                    </Flex>
                                </Flex>
                                <Text
                                    color={"#979391"}
                                    fontWeight={500}
                                    fontFamily={"QtOpt"}
                                >
                                    {item.desc}
                                </Text>
                                <Button
                                    w={"100%"}
                                    minH={"74px"}
                                    borderRadius={0}
                                    color={"#fff"}
                                    fontSize={"20px"}
                                    fontWeight={700}
                                    fontFamily={"Inter"}
                                    bg={
                                        (index + 1) % 3 === 1 
                                        ? "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #748E9C"
                                        : (
                                            (index + 1) % 3 === 2
                                            ? "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #9DB1BC"
                                            : "radial-gradient(43.08% 63.75% at 50% 50%, rgba(240, 249, 255, 0.5) 0%, rgba(241, 250, 255, 0) 100%), #B8BEC1"
                                        )
                                    }
                                >
                                    Succeed by {item.author}
                                </Button>
                            </Box>
                    })}
                </Flex>
            </Box>
        </Box>
    );
}


export default Dreams;