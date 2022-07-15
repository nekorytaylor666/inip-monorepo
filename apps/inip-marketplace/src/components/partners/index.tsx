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
        <Box
            mt={"50px"}
            minW={'100%'}
            height={"250px"}
            maxHeight={250}
            overflow={"auto"}
            whiteSpace={'nowrap'}
        >
            {partners.map((item, index) => {
                return <PartnerItem item={index}/>
            })}
        </Box>
    );
}

export default Partners;
