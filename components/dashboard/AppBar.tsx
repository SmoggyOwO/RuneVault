import AccountButton from "@/components/Profile";
import RuneIcon from "@/components/RuneIcon";

export default function AppBar() {
  return (
    <div className="flex justify-between  p-4 px-20 border items-center">
      <RuneIcon />
      <div className="flex items-center gap-4">
        <AccountButton />
      </div>
    </div>
  );
}
