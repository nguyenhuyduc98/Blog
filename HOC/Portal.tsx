"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
    const [mount, setMount] = useState(false);
    const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setMount(true);
        if (document) {
            setPortalEl(document.getElementById("portal"));
        }
        return () => {
            setMount(false);
        };
    }, []);
    return mount && portalEl ? createPortal(children, portalEl) : null;
};

export default Portal;
