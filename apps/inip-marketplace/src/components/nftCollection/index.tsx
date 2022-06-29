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
import eth from "@public/icons/homepage/ethereum.svg";
import Image from "next/image";
import frame from "@public/icons/community/frame.png";
import NFTItem from "../nftItem/index";

export const Collection: React.FC = ({ collection }) => {
    return (
        <Flex
            flexWrap={"wrap"}
            gap={"45px"}
            mt={"80px"}
        >
            {collection.map((item) => {
                return (
                    <NFTItem key={item.id} item={item}/>
                );
            })}
        </Flex>
    );
};
