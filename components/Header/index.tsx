import Button from "@/container/Button";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuHeader from "../MenuHeader";
import { useResizeWindow } from "@/hooks/useResizeWindow";

const Header = () => {
    const { width } = useResizeWindow();
    console.log("🚀 ~ file: index.tsx:9 ~ Header ~ width:", width);
    return (
        <div className="flex justify-between items-center h-[128px] w-full p-10">
            <div className="font-poppins font-semibold text-white text-2xl">
                Hi Duck
            </div>
            <div className="flex items-center justify-center gap-3">
                <MenuHeader />
                <Button>
                    <AiOutlineMenu />
                </Button>
            </div>
        </div>
    );
};

export default Header;
