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
    Link
} from "@chakra-ui/react";
import Image from "next/image";
import BenefitItem from "./benefitItem";
// import Link from 'next/link';



const Benefits = ({charity}) => {

    return (
        <Flex
            gap={"2%"}
            justifyContent={"center"}
            textAlign={"center"}
            color={"#476676"}
            flexDir={{md: 'row', sm: 'column'}}
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
