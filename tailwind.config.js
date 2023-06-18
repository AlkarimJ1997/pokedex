/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					500: 'rgba(4, 6, 20, 0.85)',
				},
				secondary: {
					50: 'rgba(255, 255, 255, 0.052)',
					100: 'rgba(255, 255, 255, 0.125)',
					400: 'rgba(255, 255, 255, 0.779)',
					border: 'rgba(255, 255, 255, 0.23)',
				},
			},
			width: {
				cardWidth: 'var(--pokemon-card-width)',
			},
			height: {
				navHeight: 'var(--nav-height)',
				footerHeight: 'var(--footer-height)',
				mainHeight: 'var(--main-height)',
			},
			maxHeight: {
				pokemonGridHeight: 'calc(var(--main-height) - 15vh)',
			},
			gridTemplateColumns: {
				pokemonGrid: 'repeat(auto-fit, minmax(var(--pokemon-card-width), 1fr))',
				pokemonCardTypes: 'repeat(auto-fit, minmax(3.75rem, 1fr))',
			},
		},
	},
	plugins: [],
};
