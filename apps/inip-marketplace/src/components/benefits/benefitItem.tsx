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

    return <Box key={item.id} mb={{md: 0, sm: '5%'}} width={{md: "25%", sm: '100%'}}>
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

