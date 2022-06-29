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
import {Collection} from "pages/creator-support";
import CollectionItem from "./collection-item";

const CommunityCollections = ({communityCollection}: Collection[]) => {

    const [collection, setCollection] = useState([...communityCollection]);

    return (
        <Flex flexWrap={"wrap"} gap={"25px"}>
            {collection.map((item) => {

                return <CollectionItem key={item.id} item={item} />
            })}
        </Flex>
    );

}

export default CommunityCollections;