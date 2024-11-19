"use client";

import Deposit from "@/components/dashboard/Deposit";
import Withdraw from "@/components/dashboard/Withdraw";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (!session?.data?.user?.email) return;
    const handleGetBalance = async () => {
      setIsFetching(true);
      try {
        const response = await fetch("/api/getBalance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.data?.user?.email,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch balance");
        }

        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setIsFetching(false);
      }
    };
    handleGetBalance();
  }, [session]);

  return (
    <div>
      <div className="text-4xl font-medium">Portfolio</div>
      <div className="flex-col border mt-6 rounded-xl py-6 px-6">
        <div className="text-lg underline font-medium">Portfolio value</div>
        <div className="flex justify-between">
          <div className="text-3xl font-medium">
            {isFetching ? "Loading..." : `${balance.toLocaleString()} SOL`}
          </div>
          <div className="flex gap-2">
            <Deposit />
            <Withdraw />
          </div>
        </div>
      </div>
    </div>
  );
}
