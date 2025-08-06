"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import type { Product } from "@/types/product";
import { ProductCard } from "./product-card";
import { Input } from "./ui/input";

type ProductListProps = {
	products: Product[];
};

export function ProductList({ products }: ProductListProps) {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredProducts = useMemo(() => {
		return products.filter((product) =>
			product.title.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	}, [searchQuery, products]);

	return (
		<div className="flex flex-col gap-6">
			<div className="relative">
				<Search className="size-4 shrink-0 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
				<Input
					type="text"
					placeholder="Search product..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="pl-10 w-full"
				/>
			</div>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
				{filteredProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
