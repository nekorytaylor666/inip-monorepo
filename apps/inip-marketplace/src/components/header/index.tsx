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
import white_account from "@public/icons/header/white-account.svg";
import white_eth from "@public/icons/header/white-eth.svg";
import sky from "@public/icons/dreams-come-true/sky.jpg";

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


export const DreamHeader: React.FC = () => {

    return (
        <Center 
            p={"30px 200px 20px"}
            gap={"50px"}
            bgImage={sky.src}
            bgSize={"cover"}
            color={"#fff"}
        >
            <Center 
                minW={"265px"}
                minH={"56px"}
                border={"1px solid #ececec"}
                bg={"radial-gradient(43.08% 63.75% at 50% 50%, rgba(230, 234, 233, 0.2) 0%, rgba(255, 244, 231, 0) 100%)"}
                fontFamily={"Inter"}
                fontWeight={900}
            >
                <Link href="/">
                    <a>
                        Back to INIP Marketplace
                    </a>
                </Link>
            </Center>
            <Flex
                w={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Flex
                    gap={"40px"}
                >

                    <Link href="/">
                        <Box fontFamily={"SangSunrise"} fontWeight={700}>
                            <a>DREAMS COME TRUE</a>
                        </Box>
                    </Link>
                    <Link href="/dreams">
                        <Box fontFamily={"Inter"}>
                            <a>Dreams</a>
                        </Box>
                    </Link>
                </Flex>
                <Flex
                    gap={"20px"}
                >
                    <Square 
                        w={"56px"} 
                        h={"56px"}
                        border={"1px solid #ececec"}
                    >
                        <Image src={white_account}/>
                    </Square>
                    <Square 
                        w={"56px"} 
                        h={"56px"}
                        border={"1px solid #ececec"}
                    >
                        <Image src={white_eth}/>
                    </Square>
                </Flex>
            </Flex>
        </Center>
    );
};
