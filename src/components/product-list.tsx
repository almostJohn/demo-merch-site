import type { Product } from "@/types/product";
import { ProductCard } from "./product-card";

type ProductListProps = {
	products: Product[];
};

export function ProductList({ products }: ProductListProps) {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
