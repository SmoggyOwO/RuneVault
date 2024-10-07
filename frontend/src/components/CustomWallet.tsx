import useGetMnemonic from "../hooks/useMnemonic";
import { useState } from "react";

function CustomWallet({ wallet }) {
	const seeds = useGetMnemonic((state) => state.seeds);
	const [copiedIndex, setCopiedIndex] = useState(null);

	const copyToClipboard = (text, index) => {
		navigator.clipboard.writeText(text);
		setCopiedIndex(index);
		setTimeout(() => setCopiedIndex(null), 2000);
	};

	return (
		<div className="mt-6">
			<h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
				{wallet} Wallets
			</h3>
			<div className="flex flex-col gap-4">
				{seeds.map((seed, index) => (
					<div
						key={index}
						onClick={() => copyToClipboard(seed, index)}
						className="relative group cursor-pointer"
					>
						<div className="absolute inset-0 rounded-lg blur-sm"></div>
						<div className="relative bg-slate-800 rounded-lg p-4 flex items-center justify-between hover:bg-slate-700 transition-colors">
							<code className="font-mono text-sm text-slate-300">{seed}</code>
							<div className="text-slate-400 group-hover:text-white transition-colors">
								{copiedIndex === index ? (
									<span className="text-green-400">Copied!</span>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
										<path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
									</svg>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CustomWallet;
