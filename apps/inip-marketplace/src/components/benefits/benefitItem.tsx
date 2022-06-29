import React from "react";
import {
    Flex,
    Box,
    Center,
    Text,
    Heading,
    Square,
    Button,
    ButtonGroup,
} from "@chakra-ui/react";
import Image from "next/image";


const BenefitItem = ({item}) => {

    return <Box key={item.id} maxWidth={"350px"}>
                <Image src={item.image} />
                <Heading as="h4" fontSize={"20px"} mt={"35px"}>
                    {item.title}
                </Heading>

                <Text mt={"15px"} fontWeight={"500"}>
                    {item.description}
                </Text>
            </Box>
}


export default BenefitItem;

