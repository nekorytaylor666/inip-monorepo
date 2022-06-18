import { extendTheme } from "@chakra-ui/react";

export const buttonTheme = extendTheme({
    components: {
        Button: {
            backdroundColor: {
                primary:
                    "radial-gradient(43.08% 63.75% at 50% 50%, rgba(181, 169, 157, 0.2) 0%, rgba(255, 244, 231, 0) 100%) #6A5843",
                secondary: "#FFF",
            },
            color: {
                primary: "#FFF",
                secondary: "#000",
            },
            maxWidth: (props) => ({
                maxWidth: props.maxWidth,
                width: "100%",
            }),
            minHeight: (props) => ({
                minHeight: props.minHeight,
            }),

            fontSize: (props) => ({
                fontSize: props.fontSize,
            }),
            borderBox: (props) => ({
                border: props.border,
            }),
        },
    },
});

export const themeMain = extendTheme({
    buttonTheme,
});