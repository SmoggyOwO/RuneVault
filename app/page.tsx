"use client"
import NavigationBar from "@/components/landing/NavigationBar";
import CryptoNotifications from "@/components/landing/CryptoNotifications";
import FAQSection from "@/components/landing/FAQSection";
import FeaturesOverview from "@/components/landing/FeaturesOverview";
import HeroSection from "@/components/landing/HeroSection";
import TokenOrbit from "@/components/landing/TokenOrbit";
import Newsletter from "@/components/landing/Newsletter";
import SponsorTicker from "@/components/landing/SponsorTicker";
import { useEffect } from "react";
import { checkIsAuthenticated } from "@/lib/checkIsAuthenticated";
import { useRouter } from "next/navigation";

function FooterCredit() {
	return (
		<div className="fixed bottom-0 right-0 mb-6 mr-8 text-sm sm:text-base text-black dark:text-white">
			<a
				href="https://github.com/SmoggyOwO"
				target="_blank"
				rel="noopener noreferrer"
			>
				Made with{" "}
				<span role="img" aria-label="heart">
					❤️
				</span>{" "}
				by Aditya
			</a>
		</div>
	);
}

export default function Home() {

	return (
		<div>
			<NavigationBar />

			<section id="about">
				<HeroSection />
			</section>

			<section id="features">
				<FeaturesOverview />
			</section>

			<div className="flex flex-col items-center mt-20 w-full">
				<div className="text-xl text-center sm:text-4xl dark:text-white text-black">
					Works across all Blockchains
				</div>
				<div className="grid grid-cols-2 w-full">
					<TokenOrbit />
					<CryptoNotifications />
				</div>
			</div>

			<section id="faq">
				<FAQSection />
			</section>

			<SponsorTicker />

			<section id="contact">
				<Newsletter />
			</section>
			<FooterCredit />
		</div>
	);
}

