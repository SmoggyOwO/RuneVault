import SparklesText from "@/components/ui/sparkles-text";
import { useModal } from "./ui/animated-modal";

export default function RuneIcon() {
	const { open, setOpen } = useModal();
	return (
		<div className="cursor-pointer" aria-label="RuneVault Logo" onClick={() => {
			setOpen(true);
			console.log(open);
		}}>
			<SparklesText text="RuneVault" />
		</div>
	);
}
