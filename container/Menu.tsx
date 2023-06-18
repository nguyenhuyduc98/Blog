import Portal from "@/HOC/Portal";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type PlacementType = "top" | "bottom";

interface MenuProps {
    overlay: React.ReactElement;
    children: React.ReactElement;
    className?: string;
    placement?: PlacementType;
}
const Menu: React.FC<MenuProps> = ({
    overlay,
    children,
    className,
    placement = "top",
}) => {
    const [open, setOpen] = useState();
    return (
        <div className={twMerge(``, className)}>
            <div>{children}</div>
            <Portal>{overlay}</Portal>
        </div>
    );
};

export default Menu;
