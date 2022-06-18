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

export const Collection: React.FC = ({ collection }) => {
    return (
        <Flex
            flexWrap={"wrap"}
            gap={"45px"}
            // justifyContent={'center'}
            mt={"80px"}
        >
            {collection.map((item) => {
                return (
                    <Box maxWidth={"30%"} key={item.id}>
                        <Image src={item.image} />
                        <Flex
                            color={"#1C2529"}
                            mt={"28px"}
                            justifyContent={"space-between"}
                        >
                            <Box fontFamily={"QtOpt"} maxWidth={"190px"}>
                                <Heading
                                    fontSize={"20px"}
                                    fontWeight={900}
                                    fontFamily={"QtOpt"}
                                >
                                    {item.title}
                                </Heading>
                                <Flex
                                    gap={"5px"}
                                    fontSize={"14px"}
                                    fontWeight={700}
                                >
                                    by{" "}
                                    <Text
                                        fontFamily={"QtOpt"}
                                        color={"#788D98"}
                                    >
                                        {item.author}
                                    </Text>
                                </Flex>
                            </Box>
                            <Box fontFamily={"Inter"} color={"#1C2529"}>
                                <Flex
                                    fontSize={"22px"}
                                    fontWeight={700}
                                    justifyContent={"flex-end"}
                                    gap={"10px"}
                                >
                                    {item.price}
                                    <Image src={eth} />
                                </Flex>
                                <Text fontWeight={700} color={"#788D98"}>
                                    Last price {item.lastPrice} ETH
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                );
            })}
        </Flex>
    );
};
