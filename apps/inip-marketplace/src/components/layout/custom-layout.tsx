import { DreamHeader } from "@components/header";

export default function CustomLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DreamHeader />
            <main>{children}</main>
        </>
    );
}