/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["cdn.weatherapi.com"],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "cdn.weatherapi.com",
				port: "",
				pathname: "/weather/**",
			},
		],
	},
};

module.exports = nextConfig;
