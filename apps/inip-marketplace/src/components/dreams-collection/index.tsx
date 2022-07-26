import React, {useState} from "react";

import {
    Box,
    ButtonGroup,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Skeleton,
    Square,
    Text,
    VStack,
    Checkbox
} from "@chakra-ui/react";
import { DreamsNFT } from "pages/dreams";
import eth from "@public/icons/homepage/ethereum.svg";
import Image from "next/image";
import Link from "next/link";




const DreamsCollection = (props) => {

    const [dreamsNFT, setDreamsNFT] = useState(props.dreams);

    return (

            <Flex
                flexWrap={"wrap"}
                justifyContent={'space-between'}
            >
                {dreamsNFT.map((item, index) => {

                    return <Box
                            key={item.id}
                            minH={"647px"}
                            maxH={"680px"}
                            maxW={"29%"}
                            mb={14}
                        >
                            <Image width={"500px"} height={"500px"} src={item.img.src}/>
                            <Flex
                                pt={"10px"}
                                justifyContent={"space-between"}
                                color={"#1c2529"}
                                alignItems={"center"}
                            >
                                <Heading fontSize={"20px"} fontWeight={700} fontFamily={"QtOpt"}>{item.name}</Heading>
                                <Flex
                                    fontWeight={600}
                                    fontFamily={"Inter"}
                                    fontSize={"24px"}
                                    gap={"12px"}
                                >
                                    5468
                                    <Image src={eth}/>
                                </Flex>
                            </Flex>
                            <Text
                                color={"#979391"}
                                fontWeight={500}
                                fontFamily={"QtOpt"}
                            >
                                {item.desc}
                            </Text>
                            <Button
                                w={"100%"}
                                minH={"74px"}
                                borderRadius={0}
                                color={"#fff"}
                                fontSize={"20px"}
                                fontWeight={700}
                                fontFamily={"Inter"}
                                bg={
                                    (index + 1) % 3 === 1
                                    ? "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #748E9C"
                                    : (
                                        (index + 1) % 3 === 2
                                        ? "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #9DB1BC"
                                        : "radial-gradient(43.08% 63.75% at 50% 50%, rgba(240, 249, 255, 0.5) 0%, rgba(241, 250, 255, 0) 100%), #B8BEC1"
                                    )
                                }
                            >
                                Succeed by {item.author}
                            </Button>
                        </Box>
                })}
            </Flex>
    );
}

export default DreamsCollection;
