import OrbitingCircles from "./ui/orbiting-circles";

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
					<img src="https://cryptologos.cc/logos/solana-sol-logo.png" />
				</OrbitingCircles>
				<OrbitingCircles
					className="size-[30px] border-none bg-transparent"
					duration={20}
					delay={10}
					radius={80}
				>
					<img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" />
				</OrbitingCircles>

				<OrbitingCircles
					className="size-[50px] border-none bg-transparent"
					radius={190}
					duration={20}
					reverse
				>
					<img src="https://cryptologos.cc/logos/polygon-matic-logo.png" />
				</OrbitingCircles>
				<OrbitingCircles
					className="size-[50px] border-none bg-transparent"
					radius={190}
					duration={20}
					delay={20}
					reverse
				>
					<img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" />
				</OrbitingCircles>
			</div>
		</div>
	);
}
