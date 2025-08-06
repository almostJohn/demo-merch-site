import "@/styles/globals.css";
import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	appleWebApp: {
		title: siteConfig.name,
	},
	applicationName: siteConfig.name,
	openGraph: {
		siteName: siteConfig.name,
		description: siteConfig.description,
		type: "website",
		title: siteConfig.title,
	},
	twitter: {
		card: "summary_large_image",
		creator: siteConfig.creator,
		title: siteConfig.title,
		description: siteConfig.description,
	},
	creator: siteConfig.creator,
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-background text-foreground antialiased",
					manrope.className,
				)}
			>
				{children}
			</body>
		</html>
	);
}
