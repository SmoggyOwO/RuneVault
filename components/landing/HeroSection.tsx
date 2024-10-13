"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShinyButton from "@/components/ui/shiny-button";
import LoginButton from "@/components/LoginModal";
import HeroImage from '@/assets/heroimage.jpg'
import Image from "next/image";
import { ModalProvider } from "../ui/animated-modal";
import { checkIsAuthenticated } from "@/lib/checkIsAuthenticated";
import LoginModal from "@/components/LoginModal";
import Wallet from "../Wallet";
import AccountButton from "../Profile";
import { useRouter } from "next/navigation";

export default function HeroSection() {
	const [login, setLogin] = useState("false");
	const router = useRouter();
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
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
	const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<div ref={containerRef} className="relative ">
			<div className="z-10 flex lg:min-h-[10rem] md:min-h-[7rem] min-h-[5rem] items-center justify-center">
				<div className="mt-16 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center">
						<motion.div
							className="flex justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<ShinyButton>Version 1.0 is here</ShinyButton>
						</motion.div>
						<motion.h1
							className="text-4xl sm:text-5xl font-bold text-center mt-5"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							The Crypto of Tomorrow, Today
						</motion.h1>
						<motion.p
							className="text-xl font-medium text-center mt-5 mb-5"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							Connect your wallet or create one effortlessly with just your
							Google Account
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							<div>{login === "false" ? <LoginModal>Get Started</LoginModal> : <div className="flex relative overflow-hidden px-8 py-2.5 rounded-xl border text-black dark:text-white flex justify-center group/modal-btn hover:shadow-md transition-all duration-300 ease-in-out  text-center transition-transform duration-500 text-sm font-medium tracking-wide" onClick={() => router.push("dashboard")}>Go to Dashboard</div>}</div>
						</motion.div>
					</div>
				</div>
			</div>

			<motion.div
				className="relative mt-10 mx-auto max-w-5xl"
				style={{ opacity: imageOpacity }}
			>
				<div className="relative w-full pt-[60%] bg-gray-800 rounded-t-xl overflow-hidden shadow-2xl">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-2 bg-gray-700 rounded-b-lg"></div>
					<motion.div
						className="absolute inset-2 rounded-lg overflow-hidden bg-white"
						style={{ scale: imageScale }}
					>
						<Image
							src={HeroImage}
							alt="Crypto Network Visualization"
							width={1020}
						/>
					</motion.div>
				</div>
				<div className="h-4 bg-gray-800 rounded-b-xl"></div>
			</motion.div>
		</div>
	);
}
