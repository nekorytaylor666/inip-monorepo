import { Box, Container } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "pages/_app";
import { useEffect } from "react";
import { Header } from "..";
import { Footer } from "..";

export default function Layout({
    children: page,
}: {
    children: NextPageWithLayout;
}) {
    return (
        <Box minH={"100vh"}>
            <Header />
            <main>{page}</main>
            <Footer />
        </Box>
    );
}
