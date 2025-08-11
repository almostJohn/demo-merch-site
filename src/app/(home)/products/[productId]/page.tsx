import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductById } from "@/data/get-product-by-id";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ productId: number }>;
}): Promise<Metadata> {
	const { productId } = await params;
	const product = await getProductById(productId);
	const title = product?.title ?? "Unknown";

	return {
		title,
	};
}

export default async function ProductIdPage({
	params,
}: {
	params: Promise<{ productId: number }>;
}) {
	const { productId } = await params;
	const product = await getProductById(productId);

	if (!product) {
		notFound();
	}

	return (
		<div className="min-h-screen flex flex-col px-6 md:px-8 pt-6 md:pb-24">
			<h1>{product.title}</h1>
			<div>{product.id}</div>
		</div>
	);
}
