import { useRouter } from "next/navigation";
import { IoWalletOutline } from "react-icons/io5";

export default function Wallet() {
	const router = useRouter();
	return (
		<div className="bg-white border rounded-xl cursor-pointer p-2 hover:bg-gray-100" onClick={() => router.push("/dashboard")}>
			<IoWalletOutline size={24} />
		</div>
	);
}
