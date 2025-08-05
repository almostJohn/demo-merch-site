import type { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { jetBrainsMono } from "@/lib/fonts";
import { buttonVariants } from "./ui/button";

type ProductCardProps = {
	product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
	return (
		<div className="relative group cursor-pointer w-full shadow-lg overflow-hidden rounded-lg flex flex-col h-full">
			<div className="aspect-square shrink-0 flex items-center justify-center p-4 shadow-lg transition-all duration-200 group-hover:bg-black/10">
				<Image
					src={product.image}
					alt={product.title}
					width={200}
					height={200}
					priority
					className="object-contain max-h-full max-w-full"
				/>
			</div>
			<div className="p-6 bg-white flex-1 flex flex-col gap-4 justify-between">
				<div className="flex justify-between">
					<div className="text-neutral-500 text-sm tracking-tight">
						Price:{" "}
						<span className={cn(jetBrainsMono.className)}>
							${product.price}
						</span>
					</div>
					<div className="flex items-center gap-1.5 text-sm">
						<Star className="size-5 shrink-0 fill-current text-yellow-500" />
						<span>{product.rating.rate}</span>
					</div>
				</div>
				<div className="font-medium text-base line-clamp-2">
					{product.title}
				</div>
				<Link
					href={`/products/${product.id}`}
					className={cn(buttonVariants({ className: "w-full" }))}
				>
					Add to Cart
				</Link>
			</div>
		</div>
	);
}
