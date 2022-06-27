import { getNftsForOwner } from "@alch/alchemy-sdk";
import axios from "axios";
import React, { useEffect } from "react";

const AccountPage = () => {
    const getNftsForAddress = async () => {
        const res = await axios.get("/api/nfts-by-owner");
        console.log(res);
    };
    useEffect(() => {
        getNftsForAddress();
    }, []);

    return <div>AccountPage</div>;
};

export default AccountPage;
