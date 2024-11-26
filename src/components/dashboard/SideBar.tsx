"use client";

import React from "react";
import {
  Home,
  BookOpen,
  Search,
  ArrowLeftRight,
  Clock,
  SendHorizontal,
  CircleChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      icon: <BookOpen size={20} />,
      label: "Portfolio",
      href: "/c/portfolio",
    },
    { icon: <Search size={20} />, label: "Explore", href: "/c/explore" },
    {
      icon: <SendHorizontal size={20} />,
      label: "Transfer",
      href: "/c/transfer",
    },
    {
      icon: <Clock size={20} />,
      label: "Transactions",
      href: "/c/transactions",
    },
    { icon: <ArrowLeftRight size={20} />, label: "Swap", href: "/c/swap" },
    {
      icon: <CircleChevronRight size={20} />,
      label: "Create token",
      href: "/c/create-token",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 pt-4">
      <nav className="space-y-1 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center px-4 py-3 text rounded-lg hover:bg-gray-100 transition-colors
              ${
                pathname === item.href
                  ? "text-black font font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
          >
            <span
              className={`${
                pathname === item.href ? "text-black" : "text-gray-400"
              }`}
            >
              {item.icon}
            </span>
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
