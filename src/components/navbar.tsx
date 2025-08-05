import Link from "next/link";
import { CircleUser, ShoppingCart } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-neutral-300/40 bg-neutral-50/95 backdrop-blur-xl supports-[backdrop-filter]:bg-neutral-50/60">
			<div className="mx-auto max-w-7xl flex items-center justify-between h-16 px-6 md:px-0">
				<div className="flex flex-1 items-center">
					<div className="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-medium border border-neutral-300 bg-neutral-200">
						Public Demo
					</div>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<Link href="/" className="font-bold">
						Merch Site
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-end gap-2">
					<Link
						href="/cart"
						className={cn(
							buttonVariants({
								variant: "ghost",
								size: "icon",
								className: "size-8 px-2",
							}),
						)}
					>
						<ShoppingCart className="size-4 shrink-0" />
					</Link>
					<Link
						href="/user"
						className={cn(
							buttonVariants({
								variant: "ghost",
								size: "icon",
								className: "size-8 px-2",
							}),
						)}
					>
						<CircleUser className="size-4 shrink-0" />
					</Link>
				</div>
			</div>
		</header>
	);
}
