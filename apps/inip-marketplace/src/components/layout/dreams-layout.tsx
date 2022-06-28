import { DreamHeader } from "@components/header";

export default function DreamsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DreamHeader />
            <main>{children}</main>
        </>
    );
}