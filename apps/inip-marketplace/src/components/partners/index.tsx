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
            height={220}
            overflowX={"scroll"}
            overflowY={'hidden'}
            whiteSpace={'nowrap'}
            __css={{
                '&::-webkit-scrollbar': {
                    height: "3px",
                    width: "50%",
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: `#758F9D`,
                },
            }}
        >
            {partners.map((item, index) => {
                return <PartnerItem item={index}/>
            })}
        </Box>
    );
}

export default Partners;
