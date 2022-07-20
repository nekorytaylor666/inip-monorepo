import React from "react";
import Image from "next/image";
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Square,
    Text,
} from "@chakra-ui/react";
import centerGear from "@public/icons/dreams-come-true/centerGear.svg";
import leftGear from "@public/icons/dreams-come-true/leftGear.svg";
import rightGear from "@public/icons/dreams-come-true/rightGear.svg";
import henocyde from "@public/icons/homepage/henocyde.jpg";
import eth from "@public/icons/homepage/ethereum.svg";
import CustomLayout from "../src/components/layout/custom-layout";
import sky from "@public/icons/dreams-come-true/sky.jpg";
import stars from "@public/icons/dreams-come-true/stars.svg";
import play from "@public/icons/dreams-come-true/play.svg";
import Partners from "@components/partners";

const DreamsComeTrue = () => {

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
    ];

    const partners = [0, 1, 2, 3, 4, 5];

    return (
        <Box>
            <Box
                bgImage={sky.src}
                maxH={"850px"}
                p={"0 10%"}
                bgSize={"cover"}
                bgPos={"center"}
            >
                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    minH={{md: '100vh', sm: '90vh'}}
                    color={"#fff"}
                    pb={"100px"}
                    pos={"relative"}
                >
                    <Box
                        maxW={"920px"}
                    >
                        <Heading
                            fontSize={"100px"}
                            fontWeight={400}
                            fontFamily={"Swing"}
                        >
                            Dreams Come True
                        </Heading>
                        <Text>
                            The first NFT collection that directly fulfills the dreams of people around the world.
                        </Text>
                        <Button
                            minW={"221px"}
                            minH={"74px"}
                            border={"2px solid #dedede"}
                            borderRadius={0}
                            bg={"transparent"}
                        >
                            Dreams
                        </Button>
                    </Box>
                    <Image src={stars}/>

                    <Square
                        w={"153px"}
                        h={"153px"}
                        pos={"absolute"}
                        border={"2px solid #dedede"}
                        bg={"rgba(255, 255, 255, 0.2)"}
                        bottom={"30%"}
                        left={"40%"}
                        display={{md: 'flex', sm: 'none'}}
                    >
                        <Image src={play}/>
                    </Square>
                </Flex>
            </Box>
            <Box paddingX={"10%"} paddingY={{md: '50px', sm: 0}}>
                <Flex gap={"70px"} alignItems={"center"} paddingY={100}>
                    <Square
                        h={"102px"}
                        w={"100px"}
                        border={"1px solid #476676"}
                        color={"#365262"}
                        fontFamily={"QtOpt"}
                        fontSize={"70px"}
                        fontWeight={700}
                    >
                        ?
                    </Square>
                    <Box
                        maxW={"910px"}
                    >
                        <Heading color={"#365262"}>how it works.</Heading>
                        <Text color={"#476676"} fontSize={"18px"} fontWeight={600} mt={"20px"}>
                            There is a person that has a dream. There is a buyer. There is our NFT. Every NFT will be attached to a dream. A philanthropist buys our NFT, we take the money from the purchase and use it to realize the dream of the needy/willing.
                        </Text>
                    </Box>
                </Flex>

                <Box pb={"100px"}>
                    <Heading color={"#365262"} fontFamily={"QtOpt"}>options.</Heading>
                    <Flex gap={"52px"} mt={"50px"} flexDir={{md: 'row', sm: 'column'}}>
                        <Flex
                            w={{md: "33%", sm: '100%'}}
                            minH={"282px"}
                            alignItems={"center"}
                            gap={"25px"}
                            bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), linear-gradient(0deg, #6C8693, #6C8693)"}
                            color={"#fff"}
                        >
                            <Image src={leftGear}/>
                            <Box maxW={"340px"}>
                                <Heading fontSize={"30px"}>gratitude NFTs.</Heading>
                                <Text mt={"24px"} fontSize={"18px"} fontWeight={400} fontFamily={"Inter"}>There will be a 2nd collection with NFTs, which will be sent to the philanthropists as evidence of dreams came true and gratitude to them.</Text>
                            </Box>
                        </Flex>
                        <Flex
                            w={{md: "33%", sm: '100%'}}
                            minH={"282px"}
                            alignItems={"center"}
                            gap={"25px"}
                            bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), linear-gradient(0deg, #6C8693, #6C8693)"}
                            color={"#fff"}
                        >
                            <Image src={centerGear}/>
                            <Box maxW={"340px"}>
                                <Heading fontSize={"30px"}>royalty.</Heading>
                                <Text mt={"24px"} fontSize={"18px"} fontWeight={400} fontFamily={"Inter"}>All the royalty goes to the charity project or charity organizations itself. By that, even flippers can contribute to the movement.</Text>
                            </Box>
                        </Flex>
                        <Flex
                            w={{md: "33%", sm: '100%'}}
                            minH={"282px"}
                            alignItems={"center"}
                            gap={"25px"}
                            bg={"radial-gradient(50% 50% at 50% 50%, rgba(203, 225, 239, 0.25) 0%, rgba(203, 225, 239, 0) 100%), linear-gradient(0deg, #6C8693, #6C8693)"}
                            color={"#fff"}
                        >
                            <Image src={rightGear}/>
                            <Box maxW={"340px"}>
                                <Heading fontSize={"30px"}>stages of dreams.</Heading>
                                <Text mt={"24px"} fontSize={"18px"} fontWeight={400} fontFamily={"Inter"}>There are 3 stages of NFTs: 'ransomed' - a dream is purchased, 'in progress' - it is being realized; 'succeed' - the dream came true.</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>

                <Box>
                    <Heading color={"#365262"} fontFamily={"QtOpt"} fontWeight={700}>dreams.</Heading>
                    <Flex
                        flexWrap={"wrap"}
                        justifyContent={{md: 'space-between', sm: 'center'}}
                        mt={"50px"}
                        pb={"70px"}
                    >
                        {dreams.map((item, index) => {

                            return <Box
                                    key={item.id}
                                    minH={"647px"}
                                    width={{md: '30%', sm: '100%'}}
                                    maxW={"465px"}
                                    marginBottom={10}
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

                    <Center>
                        <Button
                            minW={"316px"}
                            minH={"80px"}
                            border={"1px solid #c2d5de"}
                            bg={"transparent"}
                            color={"#365262"}
                            borderRadius={0}
                        >
                            Check more
                        </Button>
                    </Center>
                </Box>

                <Box p={"120px 0"}>
                    <Heading fontFamily={"QtOpt"} fontWeight={700} color={"#365262"}>our partners.</Heading>
                    <Partners partners={partners}/>
                </Box>
            </Box>
        </Box>
    );
}


DreamsComeTrue.getLayout = function getLayout(page: ReactElement){

    return <CustomLayout>
        <>
            {page}
        </>
    </CustomLayout>;

}
export default DreamsComeTrue;
