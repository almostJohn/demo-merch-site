import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<div className="mx-auto max-w-7xl flex items-center justify-center py-26 md:py-32 lg:py-40">
			<Loader2 className="size-6 shrink-0 animate-spin" />
		</div>
	);
}
