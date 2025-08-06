import { Products } from "@/components/products";
import { Information } from "@/components/information";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col px-6 md:px-8 pt-6 md:pb-24">
			<div className="mx-auto max-w-3xl flex items-center justify-center mb-6">
				<Information />
			</div>
			<Products />
		</div>
	);
}
