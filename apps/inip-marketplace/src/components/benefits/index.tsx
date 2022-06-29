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
import BenefitItem from "./benefitItem";




const Benefits = ({charity}) => {

    return (
        <Flex
            gap={"35px"}
            justifyContent={"center"}
            textAlign={"center"}
            color={"#476676"}
        >
            {charity.map((item) => {
                return (
                    <BenefitItem key={item.id} item={item}/>
                );
            })}
        </Flex>
    );
}



export default Benefits;