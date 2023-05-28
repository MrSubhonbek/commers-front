/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: ['loremflickr.com', 'cloudflare-ipfs.com', 'drive.google.com']
	}
}

module.exports = nextConfig
