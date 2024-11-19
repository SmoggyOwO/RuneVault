import { ArrowUpFromLine } from "lucide-react";

export default function Deposit() {
    return (
        <div className="flex flex-col items-center">
            <div className="border rounded-full p-4">
                <ArrowUpFromLine />
            </div>
            <div>Withdraw</div>
        </div>
    )
}