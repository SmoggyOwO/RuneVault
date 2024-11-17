"use client"

import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Transfer() {
    const currencies = [{"id": "Solana", "name": "Sol"}, {"id": "Etherium","name": "Eth"}, {"id": "Bitcoin", "name": "BTC"}, {"id": "Polygon", "name": "Poly"}];
    const [currency, setCurrency] = useState(currencies[0].name);

    return (
        <div className="flex flex-col justify-center bg-gray-400 rounded-xl px-4 py-4">
            <div className="text-2xl font-bold pb-3">Send to Solana Wallet Address</div>
            <div className="text-lg font-medium pb-2">Send funds to a Solana wallet address you specify.</div>
            
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full bg-white py-2 border rounded-lg text-left px-3">
                    Asset: {currency}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-white border rounded-lg" sideOffset={5}>
                    {currencies.map((curr) => {
                        return <DropdownMenuItem key={curr.id} className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => setCurrency(curr.name)}>
                            {curr.id}
                        </DropdownMenuItem>
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="mt-2">Amount</div>
            <input className="border rounded-lg p-2 w-full" />
            
            <div className="mt-2">Address</div>
            <input className="border rounded-lg p-2 w-full" />
            
            <div className="mt-4 flex justify-between gap-4">
                <Button variant="outline" className="w-full">Cancel</Button>
                <Button className="w-full">Send Money</Button>
            </div>
        </div>
    )
}