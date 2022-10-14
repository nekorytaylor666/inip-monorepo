import React from "react";
import { Button, ButtonProps, ChakraProps } from "@chakra-ui/react";

const InipButton = (props: ButtonProps) => {
    return (
        <Button
            width={"100%"}
            borderRadius={0}
            color={"white"}
            py={8}
            fontSize={"20px"}
            fontWeight={700}
            fontFamily={"Inter"}
            bg={
                "radial-gradient(43.08% 63.75% at 50% 50%, rgba(157, 184, 200, 0.5) 0%, rgba(156, 183, 199, 0) 100%), #748E9C"
            }
            {...props}
        >
            {props.children}
        </Button>
    );
};

export default InipButton;
