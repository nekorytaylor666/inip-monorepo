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
import Link from "next/link";
import eth from "@public/icons/homepage/ethereum.svg";
import frame from "@public/icons/community/frame.png";
import like from "@public/icons/profile/like.svg";


const NFTItem = ({item, liked}: NFTItemType) => {

    return (
        <Box 
            maxWidth={"31%"} 
            key={item.id}   
            position={"relative"}
        >
            <img src={frame.src} style={{backgroundSize: "100% 100%"}}/>
            <img src={item.image.src} style={{position: "absolute", top: "5%", zIndex: "0", width: "87%", left: "7%"}}/>
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
            { liked === true && 
                <Flex
                    justifyContent={"end"}
                    color={"#476676"}
                    alignItems={"center"}
                    gap={"15px"}
                >
                    <Text 
                        fontSize={"24px"} 
                        fontWeight={600} 
                        mb={0}
                    >
                        256
                    </Text>
                    <Image src={like}/>
                </Flex>
            }
        </Box>
    );
}



export default NFTItem;