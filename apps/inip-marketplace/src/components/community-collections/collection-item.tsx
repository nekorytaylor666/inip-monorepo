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
} from "@chakra-ui/react";
import {Collection} from "@pages/creator-support";
import frameSupport from "@public/icons/creator-support/frameSupport.jpg";





const CollectionItem = ({item}: Collection) => {


    return (
        
        <Flex
            w={"32%"}
            minH={"570px"}
            flexDirection={"column"}
            justifyContent={"end"}
            bgImage={frameSupport.src}
            bgSize={"100% 100%"}
            color={"#fff"}
            position={"relative"}
        >
            <Flex
                w={"88%"}
                h={"91%"}
                position={"absolute"}
                left={"6%"}
                top={"5%"}
                bgImage={item.image}
                bgSize={"cover"}
            >
                <Flex
                    w={"100%"}
                    h={"100%"}
                    position={"absolute"}
                    bgColor={"rgba(0, 0, 0, 0.4)"}
                    alignItems={"end"}
                >
                    <Flex
                        w={"100%"}
                        p={"20px"}
                        justifyContent={"space-between"}
                    >
                        <Box>
                            <Heading>
                                {item.name}
                            </Heading>
                            <Text fontWeight={700} fontFamily={"QtOpt"} fontSize={"20px"}>by {item.author}</Text>
                        </Box>
                        <Box>
                            <Text 
                                fontSize={"20px"} 
                                fontWeight={700}
                                mt={"5px"}
                            >
                                {item.price} NFTs
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}


export default CollectionItem;