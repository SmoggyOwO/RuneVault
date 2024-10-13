import { SetStateAction, useState } from "react";
import { IoWalletOutline } from "react-icons/io5";
import { RiAppsLine } from "react-icons/ri";

export default function Use() {
	const [active, setActive] = useState("wallet");

	return (
		<div className="flex items-center justify-around rounded-3xl bg-white px-1.5 py-1 w-1/5">
			<div
				className={`flex items-center rounded-3xl px-8 py-1 gap-2 transition-colors duration-300 ${
					active === "wallet" ? "bg-slate-500" : "bg-white"
				}`}
				onClick={() => setActive("wallet")}
			>
				<IoWalletOutline className="h-5 w-5" aria-label="Wallet Icon" />
				<div>{active === "wallet" ? <span className="text-white">Wallet</span> : <span>Wallet</span>}</div>
			</div>
			<div
				className={`flex items-center rounded-3xl px-8 py-1 gap-2 transition-colors duration-300 ${
					active === "apps" ? "bg-slate-500" : "bg-white"
				}`}
				onClick={() => setActive("apps")}
			>
				<RiAppsLine className="h-5 w-5" aria-label="Apps Icon" />
				<div>{active === "apps" ? <span className="text-white">Apps</span> : <span>Apps</span>}</div>
			</div>
		</div>
	);
}
