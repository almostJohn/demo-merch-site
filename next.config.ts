import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ["ts", "tsx"],
	devIndicators: false,
	experimental: {
		viewTransition: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
				pathname: "/img/**",
			},
		],
	},
};

export default nextConfig;
