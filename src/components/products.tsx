import { ProductList } from "./product-list";
import { getProducts } from "@/lib/get-products";

export async function Products() {
	const products = await getProducts();

	return <ProductList products={products} />;
}
