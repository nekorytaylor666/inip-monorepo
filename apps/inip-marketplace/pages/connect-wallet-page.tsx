import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { Button } from "@components/button";
import React, { useEffect, useState } from "react";
import walletConnect from "@public/icons/walletconnect.png";
import coinbase from "@public/icons/coinbase.png";
import metamask from "@public/icons/metamask.svg";
import {
    useAddress,
    useCoinbaseWallet,
    useMetamask,
    useWalletConnect,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";

const MetamaskIcon = <img width={33} src={metamask.src} alt="" />;
const WalletConnectIcon = <img width={33} src={walletConnect.src} alt="" />;
const CoinbaseWalletIcon = <img width={33} src={coinbase.src} alt="" />;
const ConnectWalletPage = () => {
    const connectCoinbase = useCoinbaseWallet();
    const connectMetamask = useMetamask();
    const connectWalletConnect = useWalletConnect();
    const [walletLoading, setWalletLoading] = useState(false);
    const toast = useToast();
    const walletConnections = {
        metamask: connectMetamask,
        coinbase: connectCoinbase,
        walletconnect: connectWalletConnect,
    };
    const router = useRouter();
    const address = useAddress();
    useEffect(() => {
        if (address) {
            router.push("/profile");
        }
    }, [address]);

    const connectWallet = async (wallet: keyof typeof walletConnections) => {
        try {
            setWalletLoading(true);
            await walletConnections[wallet]();
            toast({ status: "success", title: "Wallet connected" });

            setWalletLoading(false);
        } catch (error: any) {
            toast({ status: "error", title: error });
        }
    };

    return (
        <Container minH={"100vh"} mt="32" maxW="500px">
            <Heading fontSize={"40px"}> Welcome!</Heading>
            <Box mt="12">
                <Text fontSize={"lg"} fontWeight="bold" color="gray.500">
                    Wallets
                </Text>
                <Flex flexDirection={"column"} gap={4}>
                    <Button
                        isLoading={walletLoading}
                        onClick={() => connectWallet("metamask")}
                        gap={4}
                        justifyContent={"left"}
                        textAlign={"left"}
                        padding={8}
                        h="80px"
                        w="full"
                        bg={
                            "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%) #748E9C"
                        }
                        color={"#fff"}
                        fontSize={"20px"}
                        borderRadius={"0"}
                        leftIcon={MetamaskIcon}
                    >
                        Metamask
                    </Button>
                    <Button
                        isLoading={walletLoading}
                        onClick={() => connectWallet("coinbase")}
                        gap={4}
                        justifyContent={"left"}
                        textAlign={"left"}
                        padding={8}
                        h="80px"
                        w="full"
                        variant={"outline"}
                        color="gray.500"
                        fontSize={"20px"}
                        borderRadius={"0"}
                        leftIcon={CoinbaseWalletIcon}
                    >
                        Coinbase Wallet
                    </Button>
                    <Button
                        isLoading={walletLoading}
                        onClick={() => connectWallet("walletconnect")}
                        gap={4}
                        justifyContent={"left"}
                        textAlign={"left"}
                        padding={8}
                        h="80px"
                        w="full"
                        variant={"outline"}
                        color="gray.500"
                        fontSize={"20px"}
                        borderRadius={"0"}
                        leftIcon={WalletConnectIcon}
                    >
                        Wallet Connect
                    </Button>
                </Flex>
            </Box>
        </Container>
    );
};

export default ConnectWalletPage;
