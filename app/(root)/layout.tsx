import {ReactNode} from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <>
            <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1 mt-[64px]">
                {children}
            </main>
            <Footer/>
            </div>
        </>
    )
}