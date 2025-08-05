import { ProductList } from "./product-list";
import type { Product } from "@/types/product";

export async function Products() {
	const response = await fetch("https://fakestoreapi.com/products", {
		cache: "force-cache",
	});
	const data = (await response.json()) as Product[];

	return <ProductList products={data} />;
}
