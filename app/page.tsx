"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center bg-gray-900 min-h-screen w-screen overflow-auto text-white">
            <Header />
            <Footer />
        </div>
    );
}
