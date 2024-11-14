import Deposit from "@/components/dashboard/Deposit";
import Withdraw from "@/components/dashboard/Withdraw";

export default function Home() {
  return (
    <div>
      <div className="text-4xl font-semibold">Portfolio</div>
      <div className="flex-col bg-gray-400 mt-6 rounded-xl py-6 px-6">
        <div className="text-lg underline font-md">Portfolio value</div>
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">$0.00</div>
          <div className="flex gap-2">
            <Deposit />
            <Withdraw />
          </div>
        </div>
      </div>
    </div>
  );
}
