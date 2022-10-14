import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import { StyledThemeProvider } from "@definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "regenerator-runtime/runtime";
import Head from "next/head";
import "../public/css/style.css";
import { NextPage } from "next";
import Layout from "@components/layout/default-layout";
import { chainRpc } from "src/api/thirdweb";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: NextPage) => NextPage;
    isProtected?: boolean;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
    const queryClient = new QueryClient();

    const getLayout =
        Component.getLayout || ((page) => <Layout>{page}</Layout>);

    return (
        <ChakraProvider theme={theme}>
            <StyledThemeProvider>
                <ThirdwebProvider
                    chainRpc={chainRpc}
                    autoConnect
                    desiredChainId={ChainId.Goerli}
                >
                    <QueryClientProvider client={queryClient}>
                        <>
                            <Head>
                                <title>INIP</title>
                                <link href="../public/fonts/Beauty-Swing.otf" />
                                <link href="../public/fonts/Inter-Light.ttf" />
                                <link href="../public/fonts/qtoptimumregular.ttf" />
                            </Head>
                            {getLayout(<Component {...pageProps} />)}
                            <ReactQueryDevtools initialIsOpen={false} />
                        </>
                    </QueryClientProvider>
                </ThirdwebProvider>
            </StyledThemeProvider>
        </ChakraProvider>
    );
}

export default MyApp;
