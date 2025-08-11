import process from "node:process";
import type { Product } from "@/types/product";

const baseUrl =
	process.env.NEXT_PUBLIC_API_URL ?? "https://dummyjson.com/products/category";

const categoryUrls = [
	`${baseUrl}/mens-shirts`,
	`${baseUrl}/womens-dresses`,
	`${baseUrl}/mens-shoes`,
	`${baseUrl}/womens-shoes`,
] as const;

export async function getProducts() {
	const responses = await Promise.all(
		categoryUrls.map((url) => fetch(url, { cache: "no-store" })),
	);

	const data = await Promise.all(responses.map((response) => response.json()));

	return data.flatMap((data) => data.products) as Product[];
}
