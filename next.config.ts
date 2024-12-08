import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";

const withSerwist = withSerwistInit({
	swSrc: "app/sw.ts",
	swDest: "public/sw.js",
	reloadOnOnline: true,
	cacheOnNavigation: true,
});

const nextConfig: NextConfig = {
	images: {
		formats: ["image/webp"],
	},
	experimental: {
		reactCompiler: true,
	},
	env: {
		DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,
		MAX_QUALITY: process.env.MAX_QUALITY,
		MIN_QUALITY: process.env.MIN_QUALITY,
		DEFAULT_QUALITY: process.env.DEFAULT_QUALITY,
	},
};

export default withSerwist(nextConfig);
