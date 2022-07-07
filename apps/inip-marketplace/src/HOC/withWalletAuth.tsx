import { useToast } from "@chakra-ui/react";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withWalletAuth = (Component: any) => {
    const AuthenticatedComponent = () => {
        const address = useAddress();
        const router = useRouter();
        const toast = useToast();
        useEffect(() => {
            if (!address) {
                toast({
                    status: "warning",
                    title: "Please connect your wallet",
                    position: "top",
                    isClosable: true,
                });
                router.push("/connect-wallet-page");
            }
        }, [address]);

        return address ? <Component /> : null; // Render whatever you want while the authentication occurs
    };

    return AuthenticatedComponent;
};
