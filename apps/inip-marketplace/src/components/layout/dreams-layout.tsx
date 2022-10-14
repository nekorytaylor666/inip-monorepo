import { DreamHeader } from "@components/header";
import React, { useState, useEffect, useRef } from "react";

export default function DreamsLayout({
    children,
    setBgImg,
}: {
    children: React.ReactNode;
    setBgImg: boolean;
}) {
    return (
        <>
            <DreamHeader setBgImg />
            <main>{children}</main>
        </>
    );
}
