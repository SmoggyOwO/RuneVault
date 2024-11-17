import CryptoList from "@/components/dashboard/CryptoList";
import { Input } from "@/components/ui/input";

export default function() {
    return (
        <div>
            <div className="flex justify-between">
                <div className="text-3xl">Explore</div>
                <input type="text" placeholder="Search crypto" className="rounded-lg px-4 py-2"></input>
            </div>
            <CryptoList />
        </div>
    )
}