"use client";

import AppBar from "@/components/dashboard/AppBar";
import { useEffect } from "react";
import { useModal } from "@/components/ui/animated-modal";
import { checkIsAuthenticated } from "@/lib/checkIsAuthenticated";
import { useRouter } from "next/navigation";

export default function Home() {
	const { setOpen } = useModal();
	const router = useRouter();

	useEffect(() => {
		const checkAuth = async () => {
			const isAuthenticated = await checkIsAuthenticated();
			if (!isAuthenticated) {
				router.push("/");
			}
		};

		checkAuth();
	}, []);

	return (
		<div className="bg-blue-50 min-h-screen">
			<AppBar />
		</div>
	);
}
