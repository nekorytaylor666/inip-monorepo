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
import PartnerItem from "./partnerItem";

const Partners = ({partners}) => {

    return (
        <Flex
            mt={"50px"}
            scrollSnapType={"x mandatory"}
            width={"100%"}
            height={"250px"}
            gap={"30px"}
            overflowX={"scroll"}
        >
            {partners.map((item, index) => {

                return <PartnerItem item={index}/>
            })}
        </Flex>
    );
}



export default Partners;