import React, { useEffect, useState, useRef } from "react";
import {
    Flex,
    Box,
    Center,
    Text,
    Heading,
    Square,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Image
} from "@chakra-ui/react";
import upward from "@public/icons/upward.svg";
import downward from "@public/icons/downward.svg";
import { Collection } from "@components/nftCollection";
import louvre from "@public/icons/homepage/louvre.jpg";



const Louvre = () => {

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
        {
            id: "6",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },{
            id: "7",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },{
            id: "8",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },{
            id: "9",
            image: louvre,
            price: 546,
            lastPrice: 645,
            title: "HENOCYDE",
            author: "BINSKY",
        },
    ];

    return <Box p={"300px 200px"}>

        <Box>
            <Heading fontFamily={"QtOpt"} fontSize={"46px"}>
                louvre.
            </Heading>
            <Text mt={"15px"} fontWeight={700} color={"#1C2529"} mb={0}>
                Explore and collect rare digital art.
            </Text>
        </Box>

        <Flex justifyContent={"space-between"} mt={"105px"}>
            <Flex gap={"35px"}>
                <Flex alignItems={"center"} gap={"25px"}>
                    <Square w={"40px"} h={"40px"} border={"1px solid #D9D9D9"}>
                        <Image src={downward.src}/>
                    </Square>
                    <Text mb={0}>Artwork</Text>
                </Flex>
                <Flex alignItems={"center"} gap={"25px"}>
                    <Square w={"40px"} h={"40px"} border={"1px solid #D9D9D9"}>
                        <Image src={downward.src}/>
                    </Square>
                    <Text mb={0}>Artists</Text>
                </Flex>
            </Flex>
            <Flex alignItems={"center"} gap={"25px"}>
                <Text mb={0}>Recently active</Text>
                <Square w={"40px"} h={"40px"} border={"1px solid #D9D9D9"}>
                    <Image src={downward.src}/>
                </Square>   

            </Flex>
        </Flex>

        <Collection collection={collection}/>

        <Flex justifyContent={"center"}>
            <Button
                background={"rgba(255, 255, 255, 0.1)"}
                border={"1px solid #DEDEDE"}
                borderRadius={0}
                minWidth={"316px"}
                maxWidth={"316px"}
                minHeight={"80px"}
                mt={"40px"}
            >
                Check more
            </Button>
        </Flex>

    </Box>
}




export default Louvre;