import React, { useEffect, useState } from "react";

interface PositionProps {
    width: number;
    height: number;
}
export const useResizeWindow = () => {
    const [position, setPosition] = useState<PositionProps>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = (e: any) => {
        if (e.target) {
            setPosition({
                width: e.target.innerWidth,
                height: e.target.innerHeight,
            });
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        width: position.width,
        height: position.height,
    };
};
