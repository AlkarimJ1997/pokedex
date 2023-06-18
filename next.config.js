/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['raw.githubusercontent.com'],
	},
	redirects: async () => {
		return [
			{
				source: '/pokemon',
				destination: '/pokemon/1',
				permanent: true,
			},
			{
				source: '/',
				destination: '/search',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
