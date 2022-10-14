import React, { useEffect, useState, useRef } from "react";
import {
    Flex,
    Box,
    Center,
    Text,
    Heading,
    Square,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
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
        <Box
            display={"flex"}
            flexDir={{ md: "row", xs: "column" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={"30px 10%"}
            flexWrap={"wrap"}
            borderBottom={"1px solid #E6E6E6"}
            position={"fixed"}
            top={0}
            zIndex={50}
            w={"100%"}
            bg={"#fff"}
        >
            <Link href="/">
                <Heading
                    cursor="pointer"
                    as="h4"
                    fontFamily={"SangSunrise"}
                    color={"#1C2529"}
                    order={0}
                >
                    INIP
                </Heading>
            </Link>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                flexDir={{ md: "row", xs: "column" }}
                gap="30px"
                fontSize={{ md: "0.9vw", sm: "3vw" }}
                mt={{ md: 0, sm: 10 }}
                fontFamily={"Inter"}
                fontWeight={"500"}
                order={{ md: 1, sm: 2 }}
                flexWrap={{ md: "no-wrap", sm: "wrap" }}
            >
                <Link href="/">
                    <a>
                        <Text mb={0} _hover={{ fontWeight: "bold" }}>
                            Homepage
                        </Text>
                    </a>
                </Link>
                {/* <Link href="/louvre">
                    <a>
                        <Text mb={0} _hover={{ fontWeight: "bold" }}>Louvre</Text>
                    </a>
                </Link> */}

                {/* <Menu>
                    <MenuButton _hover={{ fontWeight: "bold" }}>
                        Charity Projects
                    </MenuButton>
                    <MenuList
                        borderRadius={0}
                        borderTop={"0px"}
                        p={"25px 20px"}
                        color={"#979391"}
                        fontFamily={"Inter"}
                        fontSize={"16px"}
                        ml={"-30px"}
                        mt={"35px"}
                        fontWeight={500}
                    >
                        <MenuItem _focus={{ color: "#365262", fontWeight: "bold" }}>
                            <Link href="/about-charity-project">
                                <a>
                                    <Text mb={0}>About charity projects</Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem _focus={{ color: "#365262", fontWeight: "bold" }}>
                            <Link href="/">
                                <a>
                                    <Text mb={0}>Projects</Text>
                                </a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu> */}

                <Menu>
                    <MenuButton _hover={{ fontWeight: "bold" }}>
                        Dreams
                    </MenuButton>
                    <MenuList
                        borderRadius={0}
                        borderTop={"0px"}
                        p={"25px 20px"}
                        color={"#979391"}
                        fontFamily={"Inter"}
                        fontSize={"16px"}
                        fontWeight={500}
                        ml={"-30px"}
                        mt={"35px"}
                    >
                        <MenuItem
                            _focus={{ color: "#365262", fontWeight: "bold" }}
                        >
                            <Link href="/dreams-come-true">
                                <a>
                                    <Text mb={0}>Dreams Come True</Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem
                            _focus={{ color: "#365262", fontWeight: "bold" }}
                        >
                            <Link href="/dreams">
                                <a>
                                    <Text mb={0}>Dreams</Text>
                                </a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>

                {/* <Menu>
                    <MenuButton _hover={{ fontWeight: "bold" }}>
                        Kindness Rating
                    </MenuButton>
                    <MenuList
                        borderRadius={0}
                        borderTop={"0px"}
                        p={"25px 20px"}
                        color={"#979391"}
                        fontFamily={"Inter"}
                        fontSize={"16px"}
                        fontWeight={500}
                        ml={"-30px"}
                        mt={"35px"}
                    >
                        <MenuItem
                            _focus={{ color: "#365262", fontWeight: "bold" }}
                        >
                            <Link href="/about-kindness-rating">
                                <a>
                                    <Text mb={0}>About Rating</Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem
                            _focus={{ color: "#365262", fontWeight: "bold" }}
                        >
                            <Link href="/">
                                <a>
                                    <Text mb={0}>Rating</Text>
                                </a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu> */}
                {/* 
                <Menu>
                    <MenuButton _hover={{ fontWeight: "bold" }}>
                        Community
                    </MenuButton>
                    <MenuList
                        borderRadius={0}
                        borderTop={"0px"}
                        p={"25px 20px"}
                        color={"#979391"}
                        fontFamily={"Inter"}
                        fontSize={"16px"}
                        fontWeight={500}
                        ml={"-30px"}
                        mt={"35px"}
                    >
                        <MenuItem
                            _focus={{ color: "#365262", fontWeight: "bold" }}
                        >
                            <Link href="/community">
                                <a>
                                    <Text mb={0}>INIP Community</Text>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem
                            _focus={{ color: "#365262", fontWeight: "bold" }}
                        >
                            <Link href="/creator-support">
                                <a>
                                    <Text mb={0}>Creator support</Text>
                                </a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Link href="">
                    <a>
                        <Text mb={0} _hover={{ fontWeight: "bold" }}>
                            INIP token
                        </Text>
                    </a>
                </Link> */}
                <Link href="/collections">
                    <a>
                        <Text mb={0} _hover={{ fontWeight: "bold" }}>
                            Search
                        </Text>
                    </a>
                </Link>
            </Box>

            <Flex gap={"18px"} order={{ md: 2, sm: 1 }}>
                <Link href="/profile">
                    <a>
                        <Square
                            w={"52px"}
                            h={"52px"}
                            border={"1px solid #ECECEC"}
                        >
                            <Image src={account} />
                        </Square>
                    </a>
                </Link>
                <ConnectWalletButton isTransparent={false} />
            </Flex>
        </Box>
    );
};

export const DreamHeader: React.FC<{ setBgImg: boolean }> = ({ setBgImg }) => {
    const [offset, setOffset] = useState(0);
    const [dreamBlock, setDreamsBlock] = useState(0);
    useEffect(() => {
        const id = document.getElementById("__next");

        const dreamsComeTrue = document.getElementById("dreams");
        if (dreamsComeTrue) {
            setDreamsBlock(dreamsComeTrue?.clientHeight);
        }
        const onScroll = () => setOffset(window.pageYOffset);

        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Box
            p={"30px 10% 20px"}
            gap={"50px"}
            bgSize={"cover"}
            color={"#fff"}
            position={"fixed"}
            zIndex={1}
            width={"100%"}
            borderBottom={"1px solid #ECECEC"}
            bgImage={
                setBgImg
                    ? sky.src
                    : offset > dreamBlock / 2 - 250
                    ? sky.src
                    : ""
            }
        >
            <Flex
                w={"100%"}
                gap={"40px"}
                alignItems={"center"}
                flexWrap={"wrap"}
            >
                <Link href="/">
                    <a>
                        <Box
                            border={"1px solid #ececec"}
                            bg={
                                "radial-gradient(43.08% 63.75% at 50% 50%, rgba(230, 234, 233, 0.2) 0%, rgba(255, 244, 231, 0) 100%)"
                            }
                            minW={"265px"}
                            minH={"56px"}
                            fontFamily={"Inter"}
                            fontWeight={900}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            order={{ md: 0, sm: 0 }}
                        >
                            Back to INIP Marketplace
                        </Box>
                    </a>
                </Link>

                <Flex gap={10} order={{ md: 1, sm: 2 }}>
                    <Link href="/dreams-come-true">
                        <a>
                            <Box fontFamily={"SangSunrise"} fontWeight={700}>
                                DREAMS COME TRUE
                            </Box>
                        </a>
                    </Link>

                    <Link href="/dreams">
                        <a>
                            <Box fontFamily={"Inter"}>Dreams</Box>
                        </a>
                    </Link>
                </Flex>

                <Flex
                    order={{ md: 2, sm: 1 }}
                    gap={"20px"}
                    flexGrow={1}
                    justifyContent={"flex-end"}
                >
                    <Link href={"/profile"}>
                        <Square
                            cursor={"pointer"}
                            w={"52px"}
                            h={"52px"}
                            border={"1px solid #ececec"}
                        >
                            <Image src={white_account} />
                        </Square>
                    </Link>{" "}
                    <ConnectWalletButton isTransparent />
                </Flex>
            </Flex>
        </Box>
    );
};
