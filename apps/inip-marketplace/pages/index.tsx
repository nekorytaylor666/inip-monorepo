import React, { ReactElement, useEffect, useState } from "react";
import { Spacer, Flex } from "@chakra-ui/react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { Header, Main, Cards, Footer } from "@components";
import Web3 from "web3";
import { Container } from "../src/components/homepage/index";
import { Button } from "../src/components/button/index";
import NFTMint from "./mint/NFTMint";
import Layout from "@components/layout/default-layout";

const Home = () => {
    // const { connectWallet, disconnectWallet, address, error } = useWeb3();

    return (
        <>
            <Container />
        </>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <>{page}</>
        </Layout>
    );
};

export default Home;
