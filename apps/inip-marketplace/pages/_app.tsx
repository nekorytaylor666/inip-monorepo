import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import { StyledThemeProvider } from "@definitions/styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "regenerator-runtime/runtime";
import { Hydrate } from "react-query/hydration";
import Head from "next/head";
// import {themeMain} from "../src/components/theme/theme";
import "../public/css/style.css";
import { NextPage } from "next";
import Layout from "@components/layout/default-layout";
import { initializeAlchemy, Network } from "@alch/alchemy-sdk";
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
                    desiredChainId={ChainId.Rinkeby}
                >
                    <QueryClientProvider client={queryClient}>
                        <>
                            <Head>
                                <link href="../public/fonts/Beauty-Swing.otf" />
                                <link href="../public/fonts/Inter-Light.ttf" />
                                <link href="../public/fonts/qtoptimumregular.ttf" />
                                <link href="../public/fonts/SangBleu-Sunrise.ttf" />
                                <link
                                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                                    rel="stylesheet"
                                    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                                    crossOrigin="anonymous"
                                />
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
