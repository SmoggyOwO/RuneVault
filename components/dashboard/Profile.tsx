"use client";

import { useState, useEffect, useRef } from "react";
import { MenuIcon } from "lucide-react";
import { UserCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccountButton() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		// Cleanup listener when component unmounts or isOpen changes
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className="relative">
			{/* Button */}
			<Button
				variant="outline"
				className="flex items-center space-x-2 rounded-full"
				onClick={toggleMenu}
			>
				<MenuIcon className="h-4 w-4" />
				<UserCircleIcon className="h-6 w-6" />
			</Button>

			{/* Popout Menu */}
			{isOpen && (
				<div
					ref={menuRef}
					className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10"
				>
					<ul className="py-1">
						<li>
							<a
								href="/patient/profile"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Go to Profile
							</a>
						</li>
						<li>
							<button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
								Logout
							</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
