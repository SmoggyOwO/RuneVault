"use client";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { auth } from "@/lib/auth";
import prisma from "@/prisma/prisma";
import { WalletService } from "@/lib/wallet/walletService";
import { useSession } from "next-auth/react";

export default function Transfer() {
  const session = useSession();

  const currencies = [
    { id: "Solana", name: "Sol" },
    { id: "Etherium", name: "Eth" },
    { id: "Bitcoin", name: "BTC" },
    { id: "Polygon", name: "Poly" },
  ];
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const handleSendTransaction = async (toAddress: string, amount: number) => {
    try {
      const response = await fetch("/api/sendTransaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toAddress,
          amount,
          email: session?.data?.user?.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Transaction failed");
      }

      const data = await response.json();
      alert("Transaction sent: " + data.signature);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <div className="flex flex-col justify-center border rounded-xl px-4 py-4">
      <div className="text-3xl font-medium pb-3">
        Send to Solana Wallet Address
      </div>
      <div className="text-lg pb-2 mb-2">
        Send funds to a Solana wallet address you specify.
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="w-full bg-white py-2 border rounded-lg text-left px-3">
          Asset: {currency}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[var(--radix-dropdown-menu-trigger-width)] bg-white border rounded-lg"
          sideOffset={5}
        >
          {currencies.map((curr) => {
            return (
              <DropdownMenuItem
                key={curr.id}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setCurrency(curr.name)}
              >
                {curr.id}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="mt-2 mb-1.5">Amount</div>
      <input
        className="px-3 py-1.5 border rounded-lg"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        type="text"
        placeholder="Amount"
      />

      <div className="mt-2 mb-1.5">Address</div>
      <input
        className="px-3 py-1.5 border rounded-lg"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        type="text"
        placeholder="Address"
      />

      <div className="mt-4 flex justify-between gap-4">
        <Button variant="outline" className="w-full">
          Cancel
        </Button>
        <Button
          className="w-full"
          onClick={() => handleSendTransaction(address, Number(amount))}
        >
          Send Money
        </Button>
      </div>
    </div>
  );
}
