import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SponsorTicker() {
	return (
		<div className=" bg-white">
			<div className="text-xl text-center sm:text-4xl dark:text-white text-black mt-10">
				Platinum Sponsors
			</div>
			<div className="px-5 md:px-10 m-10 md:flex items-center justify-center">
				<div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
					<motion.div
						className="flex gap-14 flex-none pr-14"
						animate={{
							translateX: "-50%",
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "linear",
							repeatType: "loop",
						}}
					>
						<Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-img" />
						<Image
							src={quantumLogo}
							alt="Quantum Logo"
							className="logo-ticker-img"
						/>
						<Image src={echoLogo} alt="Echo Logo" className="logo-ticker-img" />
						<Image
							src={celestialLogo}
							alt="Celestial Logo"
							className="logo-ticker-img"
						/>
						<Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker-img" />
						<Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-img" />
						<Image
							src={quantumLogo}
							alt="Quantum Logo"
							className="logo-ticker-img"
						/>
						<Image src={echoLogo} alt="Echo Logo" className="logo-ticker-img" />
						<Image
							src={celestialLogo}
							alt="Celestial Logo"
							className="logo-ticker-img"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
