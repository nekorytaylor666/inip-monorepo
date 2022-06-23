import { Box, styled } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { getCollections } from "src/api/marketplace";
const CollectionsPage = () => {
    const { data, isLoading, isError, error } = useQuery(
        "collections",
        getCollections,
    );
    if (isLoading) {
        return <div>loading</div>;
    }
    if (isError) {
        return <div>{JSON.stringify(error)}</div>;
    }
    return <div>{JSON.stringify(data)}</div>;
};

export default CollectionsPage;
