"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (!session?.data?.user?.email) return;
    const handleCreateWallet = async () => {
      setIsCreating(true);
      try {
        const response = await fetch("/api/createWallet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.data?.user?.email,
          }),
        });
        const data = await response.json();
        console.log("Wallet created successfully:", data);
      } catch (error) {
        console.error("Error creating wallet:", error);
      } finally {
        setIsCreating(false);
      }
    };
    handleCreateWallet();
  }, [session]);

  return (
    <div>
      <div className="text-3xl font-medium">
        Welcome back, {session?.data?.user?.name}
      </div>
    </div>
  );
}
