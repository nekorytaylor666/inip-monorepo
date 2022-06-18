import React from "react";
import { Button as BaseButton, ButtonProps } from "@chakra-ui/react";

export type IButton = ButtonProps;

const primary = {
    background: "radial-gradient(43.08% 63.75% at 50% 50%, rgba(181, 169, 157, 0.2) 0%, rgba(255, 244, 231, 0) 100%) #6A5843;",
};

const secondary = {
    border: "2px solid #DEDEDE;",
};

export const Button: React.FC<IButton> = ({ ...rest }) => {
    const others = {...rest};
    return (
        <div>
            <BaseButton {...others.primary ? {...others, ...primary} : {...others.secondary ? {...others, ...secondary} : {...others}}} data-testid="btn" />
        </div>
    );
};

