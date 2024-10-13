"use client";

import React, { useEffect } from 'react';
import LoginModal from "@/components/landing/LoginModal";
import RuneIcon from "@/components/RuneIcon";
import { useModal } from "@/components/ui/animated-modal";

export default function NavigationBar() {
    const { setOpen } = useModal();

	useEffect(() => {
		setOpen(true);
	  }, [setOpen]);

    const scrollToSection = (sectionId: string | null) => {
        if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="flex justify-between items-center p-4 px-28 backdrop-blur-[12px] z-10 top-0 left-0 sticky w-full">
            <RuneIcon />
            <div className="flex gap-8">
                <div
                    className="hover:underline cursor-pointer"
                    onClick={() => scrollToSection("about")}
                >
                    About
                </div>
                <div
                    className="hover:underline cursor-pointer"
                    onClick={() => scrollToSection("features")}
                >
                    Features
                </div>
                <div
                    className="hover:underline cursor-pointer"
                    onClick={() => scrollToSection("faq")}
                >
                    FAQ
                </div>
                <div
                    className="hover:underline cursor-pointer"
                    onClick={() => scrollToSection("contact")}
                >
                    Contact
                </div>
            </div>
            <LoginModal>Login</LoginModal>
        </div>
    );
}