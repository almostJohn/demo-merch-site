import type { Product } from "@/types/product";
import { getProducts } from "./get-products";

export async function getProductById(id: number): Promise<Product | null> {
	const products = await getProducts();
	return products.find((product) => product.id === Number(id)) ?? null;
}
