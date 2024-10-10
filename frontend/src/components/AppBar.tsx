import AccountButton from "./Profile";
import RuneIcon from "./RuneIcon";
import Wallet from "./Wallet";

export default function AppBar() {
	return (
		<div className="flex justify-between py-4 px-8">
			<RuneIcon />

			<div className="flex items-center gap-4">
				<Wallet />
				<AccountButton />
			</div>
		</div>
	);
}
