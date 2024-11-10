"use client";

import React, { Profiler, useEffect, useState } from "react";
import LoginModal from "@/components/LoginModal";
import RuneIcon from "@/components/RuneIcon";
import { checkIsAuthenticated } from "@/lib/checkIsAuthenticated";
import AccountButton from "../Profile";

export default function NavigationBar() {
  const [login, setLogin] = useState("false");
  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await checkIsAuthenticated();
      if (isAuthenticated) {
        setLogin("true");
      } else {
        setLogin("false");
      }
      console.log(login);
    };

    checkAuth();
  }, [login]);

  const scrollToSection = (sectionId: string | null) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex justify-between items-center p-4 px-20 backdrop-blur-[12px] z-10 top-0 left-0 sticky w-full">
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
      <div>
        {login === "false" ? (
          <LoginModal>Login</LoginModal>
        ) : (
          <div className="flex gap-4">
            {" "}
            <AccountButton />
          </div>
        )}
      </div>
    </div>
  );
}
