import AccountButton from "@/components/Profile";
import RuneIcon from "@/components/RuneIcon"
import Use from "@/components/dashboard/Use";
import Wallet from "@/components/Wallet";

export default function AppBar() {
	return (
		<div className="flex justify-between py-4 px-8">
			<RuneIcon />
			<Use />
			<div className="flex items-center gap-4">
				<Wallet />
				<AccountButton />
			</div>
		</div>
	);
}
