"use client";
import CryptoList from "@/components/dashboard/CryptoList";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function () {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-3xl font-medium">Explore</div>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search crypto"
          className="rounded-lg px-4 py-2 border"
        ></input>
      </div>
      <CryptoList searchQuery={searchQuery} limit={100} />
    </div>
  );
}
