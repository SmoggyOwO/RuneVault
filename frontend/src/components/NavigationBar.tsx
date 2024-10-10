import LoginModal, { WalletContextProvider } from "./LoginModal";
import RuneIcon from "./RuneIcon";

export default function NavigationBar() {
	const scrollToSection = (sectionId: string | null) => {
		if (sectionId) {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	return (
		<div className="flex justify-between items-center p-4 px-28 backdrop-blur-[12px] top-0 z-10 fixed w-full">
			<RuneIcon />
			<div className="flex gap-8">
				<div
					className="hover:underline cursor-pointer"
					onClick={() => scrollToSection("about")}
				>
					About
				</div>
				<div
					className="hover:underline cursor-pointer"
					onClick={() => scrollToSection("features")}
				>
					Features
				</div>
				<div
					className="hover:underline cursor-pointer"
					onClick={() => scrollToSection("faq")}
				>
					FAQ
				</div>
				<div
					className="hover:underline cursor-pointer"
					onClick={() => scrollToSection("contact")}
				>
					Contact
				</div>
			</div>
			<LoginModal>Login</LoginModal>
		</div>
	);
}
