import { DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export default function Transfer() {
    return (
        <div className="flex flex-col justify-center bg-gray-400 rounded-xl px-4 py-4">
            <div className="text-2xl font-bold pb-3">Send to Solana Wallet Address</div>
            <div className="text-lg font-medium pb-2">Send funds to a Solana wallet address you specify.</div>
            <DropdownMenu >
                <DropdownMenuTrigger className="bg-white py-2 border rounded-lg">Asset: Sol</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white py-2 border rounded-lg">
                    <DropdownMenuLabel>Solana</DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
            <div>Amount</div>
            <input className="border rounded-lg p-2"></input>
            <div>Address</div>
            <input className="border rounded-lg p-2"></input>
            <div className="mt-2 flex justify-between">
                <Button className="bg-white text-black">Cancel</Button>
                <Button>Send Money</Button>
            </div>
            
        </div>
    )
}