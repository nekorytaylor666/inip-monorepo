import React, { useEffect, useState } from "react";
import { Flex, Box, Center, Text, Heading, Square, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
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
        <Center justifyContent={"space-between"} my={"30px"} p={"0 200px"}>
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
                        <Text mb={0}>
                            Homepage
                        </Text>
                    </a>
                </Link>
                <Link href="">
                    <a>
                        <Text mb={0}>
                            Louvre
                        </Text>
                    </a>
                </Link>
                
                <Menu>
                    <MenuButton>
                        Charity Projects
                    </MenuButton>
                    <MenuList borderRadius={0} p={"25px 20px"}  color={"#979391"} fontFamily={"Inter"} fontSize={"18px"} fontWeight={500}>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/about-charity-project">
                                <a>
                                    <Text mb={0}>
                                        About charity projects
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/">
                                <a>
                                    <Text mb={0}>
                                        Projects
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>

                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton>
                        Dreams
                    </MenuButton>
                    <MenuList borderRadius={0} p={"25px 20px"}  color={"#979391"} fontFamily={"Inter"} fontSize={"18px"} fontWeight={500}>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/dreams-come-true">
                                <a>
                                    <Text mb={0}>
                                        Dreams Come True
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/dreams">
                                <a>
                                    <Text mb={0}>
                                        Dreams
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton>
                        Kindness Rating
                    </MenuButton>
                    <MenuList borderRadius={0}  p={"25px 20px"} color={"#979391"} fontFamily={"Inter"} fontSize={"18px"} fontWeight={500}>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/about-kindness-rating">
                                <a>
                                    <Text mb={0}>
                                        About Rating
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/">
                                <a>
                                    <Text mb={0}>
                                        Rating
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton>
                        Community
                    </MenuButton>
                    <MenuList borderRadius={0} p={"25px 20px"}  color={"#979391"} fontFamily={"Inter"} fontSize={"18px"} fontWeight={500}>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/community/1">
                                <a>
                                    <Text mb={0}>
                                        INIP Community 1
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/community/2">
                                <a>
                                    <Text mb={0}>
                                        INIP Community 2
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem _focus={ { color: "#365262" } }>
                            <Link href="/creator-support">
                                <a>
                                    <Text mb={0}>
                                        Creator support
                                    </Text>
                                </a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Link href="">
                    <a>
                        <Text mb={0}>
                            INIP token
                        </Text>
                    </a>
                </Link>
                <Link href="">
                    <a>
                        <Text mb={0}>
                            Search
                        </Text>
                    </a>
                </Link>
            </Box>

            <Flex gap={"18px"}>
                <Square w={"52px"} h={"52px"} border={"1px solid #ECECEC"}>
                    <Image src={account} />
                </Square>
                <ConnectWalletButton isTransparent={false}></ConnectWalletButton>
            </Flex>
        </Center>
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
                        w={"52px"} 
                        h={"52px"}
                        border={"1px solid #ececec"}
                    >
                        <Image src={white_account}/>
                    </Square>
                    <ConnectWalletButton isTransparent={true}></ConnectWalletButton>

                </Flex>
            </Flex>
        </Center>
    );
};
