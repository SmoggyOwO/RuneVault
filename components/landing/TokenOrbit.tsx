import OrbitingCircles from "@/components/ui/orbiting-circles";
import Image from "next/image";
import sol from "@/assets/sol-logo.png";
import eth from "@/assets/eth-logo.png";
import poly from "@/assets/poly-logo.png";
import btc from "@/assets/btc-logo.png";

export default function TokenOrbit() {
	return (
		<div>
			<div className="mt-12 relative flex flex-col items-center text-3xl font-semibold"></div>
			<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
				<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black"></span>

				<OrbitingCircles
					className="size-[30px] border-none bg-transparent"
					duration={20}
					delay={20}
					radius={80}
				>
					<Image src={sol} alt="solana"/>
				</OrbitingCircles>
				<OrbitingCircles
					className="size-[30px] border-none bg-transparent"
					duration={20}
					delay={10}
					radius={80}
				>
					<Image src={eth} alt="ethereum" />
				</OrbitingCircles>

				<OrbitingCircles
					className="size-[50px] border-none bg-transparent"
					radius={190}
					duration={20}
					reverse
				>
					<Image src={poly} alt="polygon"/>
				</OrbitingCircles>
				<OrbitingCircles
					className="size-[50px] border-none bg-transparent"
					radius={190}
					duration={20}
					delay={20}
					reverse
				>
					<Image src={btc} alt="bitcoin"/>
				</OrbitingCircles>
			</div>
		</div>
	);
}
