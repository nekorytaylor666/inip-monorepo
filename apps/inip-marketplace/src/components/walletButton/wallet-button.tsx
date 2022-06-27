import {
    MenuList,
    MenuGroup,
    MenuItem,
    MenuDivider,
    Menu,
    MenuButton,
    IconButton,
} from "@chakra-ui/react";
import { useMetamask, useAddress, useDisconnect } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { truncateString } from "src/utils/helpers";
import Web3 from "web3";
import eth from "@public/icons/header/eth.svg";
import Image from "next/image";
import { ethers } from "ethers";

export const ConnectWalletButton: React.FC = () => {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();
    const [balance, setBalance] = useState("");

    useEffect(() => {
        getBalance();
    }, [address]);

    const getBalance = async () => {
        if (window.ethereum !== undefined) {
            const web3 = new Web3(window.ethereum);
            if (address !== undefined) {
                const balance = await web3.eth.getBalance(address);
                const balanceInEth = ethers.utils.formatEther(balance);
                setBalance(balanceInEth);
            }
        }
    };
    const WalletMenuItemsButton = () => {
        return (
            <MenuList>
                {address ? (
                    <>
                        <MenuGroup title="Address">
                            <MenuItem>{truncateString(address, 8)}</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Balance">
                            <MenuItem>{balance}</MenuItem>
                        </MenuGroup>
                        <MenuDivider></MenuDivider>
                        <MenuItem
                            textColor={"red"}
                            onClick={() => disconnect()}
                        >
                            Disconnect
                        </MenuItem>
                    </>
                ) : (
                    <MenuItem
                        onClick={() => {
                            connectWithMetamask();
                            getBalance();
                        }}
                    >
                        Connect Wallet
                    </MenuItem>
                )}
            </MenuList>
        );
    };
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton isActive={isOpen}>
                        {isOpen ? (
                            <IconButton
                                w={"52px"}
                                h={"52px"}
                                bg={"#000000"}
                                borderRadius={0}
                                aria-label="Search database"
                                icon={<Image src={eth} />}
                            />
                        ) : (
                            <IconButton
                                w={"52px"}
                                h={"52px"}
                                bg={
                                    "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%) #748E9C"
                                }
                                borderRadius={0}
                                aria-label="Search database"
                                icon={<Image src={eth} />}
                            />
                        )}
                    </MenuButton>
                    <WalletMenuItemsButton></WalletMenuItemsButton>
                </>
            )}
        </Menu>
    );
};
