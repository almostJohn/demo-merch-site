import { Suspense } from "react";
import { ProductList } from "./product-list";
import { getProducts } from "@/lib/get-products";

export async function Products() {
	const products = await getProducts();

	return (
		<Suspense fallback={<ProductListSkeleton />}>
			<ProductList products={products} />
		</Suspense>
	);
}

function ProductListSkeleton() {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
			{Array.from({ length: 20 }).map((_, index) => (
				<div
					key={index + 1}
					className="block rounded-lg h-82 w-full bg-accent duration-300 animate-pulse"
				/>
			))}
		</div>
	);
}
