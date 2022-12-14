import {
    Box,
    Flex,
    Center,
    Container,
    Heading,
    Input,
    SimpleGrid,
    Spinner,
    styled,
    Text,
} from "@chakra-ui/react";
import Layout from "@components/layout/default-layout";
import { INFTCollection } from "@inip/types";
import { NextPage } from "next";
import React from "react";
import { useQuery } from "react-query";
import { getCollections } from "src/api/marketplace";
import frame from "@public/icons/community/frameLong.png";
import { MediaRenderer } from "@thirdweb-dev/react";
import {
    InstantSearch,
    SearchBoxProps,
    connectSearchBox,
    Highlight,
    connectHits,
    Configure,
    Pagination,
    connectStateResults,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import Link from "next/link";
import { SEARCH_TOKEN, SEARCH_URL } from "src/utils/const";
const CollectionsPage = () => {
    const { data, isLoading, isError, error } = useQuery(
        "collections",
        getCollections,
    );

    if (isLoading) {
        return (
            <Container mt="14" minH={"container.xl"} maxW={"container.xxl"}>
                <Center w="full" mt={4}>
                    <Spinner size="xl" />
                </Center>
            </Container>
        );
    }

    if (isError) {
        return <div>{JSON.stringify(error)}</div>;
    }
    const searchClient = instantMeiliSearch(SEARCH_URL, SEARCH_TOKEN);

    return (
        <Box padding={'5% 10%'} mt="14">
            <Heading mb={8} as="h1">
                Find collections.
            </Heading>
            <Flex gap={"20px"} pb={"50px"}>
                <Box color={"#979391"} fontWeight={700}>
                    <Text mb={0}>NFTs</Text>
                    <Text>248 645</Text>
                </Box>
                <Box color={"#1c2529"} fontWeight={700}>
                    <Text mb={0}>Collections</Text>
                    <Text>24 863</Text>
                </Box>
                
            </Flex>
            <InstantSearch indexName="collection" searchClient={searchClient}>
                <CustomSearchBox />
                <Configure hitsPerPage={9}></Configure>
                <CustomHits mt={8} hitComponent={Hit} />
            </InstantSearch>
        </Box>
    );
};

interface SearchBoxProps {
    currentRefinement: string;
    isSearchStalled: boolean;
    refine: (...args: any[]) => any;
}

const SearchBox: React.FC<SearchBoxProps> = ({ currentRefinement, refine }) => (
    <Input
        placeholder="Find any collection..."
        type="text"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
    />
);

const CollectionItem = ({ collection }: { collection: INFTCollection }) => (
    <Box w="full">
        <Box
            position={"relative"}
            width="full"
            height={"570px"}
            overflow="hidden"
        >
            <img
                style={{
                    zIndex: 2,
                    position: "absolute",
                    height: "540px",
                    width: "100%",
                    objectFit: "fill",
                }}
                src={frame.src}
                alt="frame"
            />
            {collection.metadata.image ? (
                <MediaRenderer
                    style={{
                        position: "absolute",
                        objectFit: "cover",
                        height: "540px",
                        width: "100%",
                        zIndex: 1
                    }}
                    src={collection.metadata.image}
                    alt="collection"
                ></MediaRenderer>
            ) : (
                <Center
                    position="absolute"
                    bg="grey"
                    minW={"full"}
                    height={"540px"}
                ></Center>
            )}
            <Center
                sx={{
                    bg: "blackAlpha.400",
                }}
                h="540px"
                w="full"
                zIndex={3}
                position="relative"
                padding={"40px"}
            >
                <Heading fontSize="2xl" as="p" color="white">
                    {collection.metadata.name}
                </Heading>
            </Center>
        </Box>
    </Box>
);

const CustomSearchBox = connectSearchBox(SearchBox);

const renderCollectionItem = (collection: INFTCollection) => (
    <Link href={`/collections/${collection.address}`}>
        <Box cursor={"pointer"}>
            <CollectionItem collection={collection}></CollectionItem>
        </Box>
    </Link>
);
const Hits: React.FC = ({ hits, ...props }: { hits: any[] }) => (
    <SimpleGrid columns={{md: "3", sm: '1'}} gap={"8"} {...props}>
        {hits?.map(renderCollectionItem)}
    </SimpleGrid>
);
const CustomHits = connectHits(Hits);

const Hit = ({ hit }: { hit: INFTCollection }) => (
    <>
        <Link href={`/collections/${hit.address}`}>
            <Box cursor={"pointer"}>
                <CollectionItem collection={hit} />
            </Box>
        </Link>
    </>
);

const Loading = connectStateResults(({ searching, children }) => (
    <>
        <Center
            w="full"
            mt={4}
            style={{ display: searching ? "block" : "none" }}
        >
            <Spinner size="xl" />
        </Center>

        <div style={{ display: searching ? "none" : "block" }}>{children}</div>
    </>
));

CollectionsPage.getLayout = (page: NextPage) => <Layout>{page}</Layout>;

export default CollectionsPage;
