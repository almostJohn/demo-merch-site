import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md cursor-pointer text-sm font-medium transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-neutral-950 text-neutral-50 hover:bg-neutral-950/90",
				ghost: "bg-transparent hover:bg-neutral-200",
				outline:
					"border border-neutral-300 bg-transparent hover:bg-neutral-200",
				destructive:
					"border border-red-500 bg-transparent text-red-500 hover:bg-red-500 hover:text-white",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}
