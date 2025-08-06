import { Products } from "@/components/products";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col px-6 md:px-8 pt-6 pb-24 md:pb-32">
			<Products />
		</div>
	);
}
