import React, {useState, useEffect} from "react";
import {
    AspectRatio,
    Flex,
    Box,
    Center,
    Text,
    Heading,
    Button,
    ButtonGroup,
    Progress,
} from "@chakra-ui/react";
import Image from "next/image";
import {ListingType, PopularType} from "src/types/types";
import { MediaRenderer } from "@thirdweb-dev/react";
import frameLil from "@public/icons/community/frame.png";
import {INftCollectionMetadata} from "@inip/types/dist";


interface ListType {
    items: ListingType[] | PopularType[];
}


const Listing = ({items}: ListType) => {

    const popular = items[0]?.asset ? 0 : 1;
    return (

        <Flex gap={"5%"} flexWrap={"wrap"} p={'0 10%'} flexDir={{md: 'row', sm: 'column'}}>
            {items.map((item: any) => {
                return(
                    <Box mb={'5%'} w={{md: items.length > 3 ? "16%" : "30%", sm: '100%'}}>
                        <Box
                            key={item._id}
                            w={'100%'}
                            h={items.length > 3 ? "350px" : "550px" }
                            pos={"relative"}
                            backgroundImage={popular ? item.nftCollectionMetadata.metadata.image : item.asset.image}
                            backgroundSize={'cover'}
                            backgroundPosition={'center'}
                        >
                            <img src={frameLil.src} style={{ width: "100%", height:"100%", position: 'absolute'}}/>
                        </Box>
                        <Box>
                            <Flex flexDir={"column"} minH={"100px"}>
                                <Text
                                    fontSize={"24px"}
                                    fontWeight={900}
                                    fontFamily={"QtOpt"}
                                    mb={0}
                                >
                                    {popular ? item.nftCollectionMetadata.metadata.name : item.asset.name}
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    mb={0}
                                    fontFamily={"QtOpt"}
                                    color={"#788D98"}
                                    noOfLines={2}
                                >
                                    {popular ? item.nftCollectionMetadata.metadata.description : item.asset.description}
                                </Text>
                            </Flex>
                        </Box>
                    </Box>
                )
            })}
        </Flex>
    );
}



export default Listing;
