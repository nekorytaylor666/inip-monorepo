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


interface ListType {
    items: ListingType[] | PopularType[];
}


const Listing = ({items}: ListType) => {

    const popular = items[0]?.asset ? 0 : 1;
    return (

        <Flex gap={"55px"} flexWrap={"wrap"}>
            {items.map((item) => {
                return <Box 
                        key={item._id} 
                        w={items.length > 3 ? "16%" : "30%"} 
                        h={items.length > 3 ? "350px" : "550px" } 
                        pos={"relative"}
                    >
                    <img src={frameLil.src} style={{ width: "100%", height:"90%"}}/>
                    <Box
                        position={"absolute"}
                        top={"3.5%"}
                        left={"6%"}
                        h={"80%"}
                        w={"93%"}
                    >
                        <MediaRenderer 
                            height={"unset"}
                            src={popular ? item.nftCollectionMetadata.metadata.image : item.asset.image}
                            style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "95%"
                            }}
                        />
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
            })}
        </Flex>
    );
}



export default Listing;