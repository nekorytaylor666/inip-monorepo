import { DreamHeader } from "@components/header";
import { Footer } from "..";

export default function CustomLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DreamHeader />
            <main>{children}</main>
            <Footer/>
        </>
    );
}