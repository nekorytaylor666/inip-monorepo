import React, { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Center,
    Text,
    Heading,
    Square,
    Container,
} from "@chakra-ui/react";
import account from "@public/icons/header/account.svg";
import Link from "next/link";
import Image from "next/image";
import { useMetamask, useAddress, useDisconnect } from "@thirdweb-dev/react";
import Web3 from "web3";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { truncateString } from "src/utils/helpers";
import { ConnectWalletButton } from "@components/walletButton/wallet-button";

export const Header: React.FC = () => {
    return (
        <Container maxW={"container.xxl"}>
            <Center justifyContent={"space-between"} my={"30px"}>
                <Link href="/">
                    <Heading
                        cursor="pointer"
                        as="h4"
                        fontFamily={"QtOpt"}
                        color={"#1C2529"}
                    >
                        INIP
                    </Heading>
                </Link>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="30px"
                    fontSize={"18px"}
                    fontFamily={"Inter"}
                    fontWeight={"500"}
                >
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#1C2529"}>
                                Homepage
                            </Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#979391"}>
                                Charity Projects
                            </Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#D9D9D9"}>
                                Louvre
                            </Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#D9D9D9"}>
                                Kindness Rating
                            </Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#D9D9D9"}>
                                Community
                            </Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#D9D9D9"}>
                                INIP token
                            </Text>
                        </a>
                    </Link>
                    <Link href="">
                        <a>
                            <Text mb={0} color={"#D9D9D9"}>
                                Search
                            </Text>
                        </a>
                    </Link>
                </Box>
                <Flex gap={"18px"}>
                    <Square w={"52px"} h={"52px"} border={"1px solid #ECECEC"}>
                        <Image src={account} />
                    </Square>
                    <ConnectWalletButton></ConnectWalletButton>
                </Flex>
            </Center>
        </Container>
    );
};
