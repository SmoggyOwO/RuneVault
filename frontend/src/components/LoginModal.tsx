"use client";

import { useMemo, ReactNode, useEffect } from "react";
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger,
} from "./ui/animated-modal";
import { FaGoogle } from "react-icons/fa";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
	ConnectionProvider,
	useWallet,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
	PhantomWalletAdapter,
	SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
	children: string;
}

interface WalletContextProviderProps {
	children: ReactNode;
}

export function WalletContextProvider({
	children,
}: WalletContextProviderProps) {
	const endpoint =
		process.env.NEXT_PUBLIC_SOLANA_RPC_URL ||
		"https://solana-devnet.g.alchemy.com/v2/your-api-key";

	const wallets = useMemo(
		() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
		[],
	);

	const { connected } = useWallet(); // Get the connection status
	const navigate = useNavigate(); // Use the useNavigate hook

	useEffect(() => {
		if (connected) {
			navigate("/dashboard"); // Navigate to your desired page when connected
			console.log("YO");
		}
	}, [connected, navigate]); // Make sure navigate is in the dependency array

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>{children}</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}

export default function LoginModal({ children }: LoginModalProps) {
	function Button() {
		return (
			<div className="flex">
				{children === "Login" ? (
					<ModalTrigger className=" flex relative overflow-hidden px-8 py-2.5 rounded-xl border text-black dark:text-white flex justify-center group/modal-btn hover:shadow-md transition-all duration-300 ease-in-out">
						<span className="group-hover/modal-btn:translate-x-32 text-center transition-transform duration-500 text-sm font-medium tracking-wide">
							{children}
						</span>
						{children === "Login" && (
							<div className="-translate-x-32 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform duration-500">
								<FaGoogle className="text-black" size={20} />
							</div>
						)}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 dark:via-gray-500/10 to-transparent group-hover/modal-btn:opacity-100 opacity-0 transition-opacity duration-500 blur-xl" />
					</ModalTrigger>
				) : (
					<ModalTrigger className="relative overflow-hidden px-8 py-2.5 rounded-xl border text-black dark:text-white flex justify-center  hover:shadow-md">
						<span className="group-hover/modal-btn:translate-x-32 text-center transition-transform duration-500 text-sm font-medium tracking-wide">
							Get Started
						</span>
						{children === "Login" && (
							<div className="-translate-x-32 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform duration-500">
								<FaGoogle className="text-black" size={20} />
							</div>
						)}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 dark:via-gray-500/10 to-transparent group-hover/modal-btn:opacity-100 opacity-0 transition-opacity duration-500 blur-xl" />
					</ModalTrigger>
				)}
			</div>
		);
	}

	return (
		<WalletContextProvider>
			<Modal>
				<Button />
				<ModalBody>
					<ModalContent>
						<div className="space-y-8">
							<div className="text-center">
								<h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
								<p className="text-black-400">
									Choose your preferred login method
								</p>
							</div>
							<div className="space-y-4 flex flex-col items-center justify-center">
								<button className="w-1/2 flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
									<FaGoogle className="mr-3 text-black" size={20} />
									Continue with Google
								</button>

								<div className="relative w-full flex items-center justify-center">
									<div className="absolute inset-0 flex items-center">
										<div className="w-full border-t border-gray-600"></div>
									</div>
									<div className="relative bg-white px-4 text-sm text-black">
										Or
									</div>
								</div>

								<div className="wallet-adapter-button-wrapper">
									<WalletMultiButton className="!w-full !py-3 !rounded-full !bg-gradient-to-r !from-purple-500 !to-indigo-600 hover:!from-purple-600 hover:!to-indigo-700 !transition-all !duration-300 !text-base !font-medium !shadow-md hover:!shadow-lg !transform hover:!scale-105" />
								</div>
							</div>

							<p className="text-center text-gray-400 text-sm">
								By continuing, you agree to our Terms of Service and Privacy
								Policy.
							</p>
						</div>
					</ModalContent>
				</ModalBody>
			</Modal>
		</WalletContextProvider>
	);
}
