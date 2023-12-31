/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '475px',
			},
			colors: {
				accent: 'var(--accent-color)',
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
			fontSize: {
				body: 'clamp(.875rem, 3vw, 1.125rem)',
			},
			keyframes: {
				enter: {
					'0%': { transform: 'scale(0.9)', opacity: 0 },
					'100%': { transform: 'scale(1)', opacity: 1 },
				},
				leave: {
					'0%': { transform: 'scale(1)', opacity: 1 },
					'100%': { transform: 'scale(0.9)', opacity: 0 },
				},
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'bounce-fast': 'bounce 0.75s infinite',
				enter: 'enter 200ms ease-out',
				leave: 'leave 150ms ease-in forwards',
			},
			width: {
				cardWidth: 'var(--pokemon-card-width)',
				toastWidth: 'var(--toast-width)',
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
				typeChart: 'repeat(auto-fit, minmax(2.5rem, max-content))',
			},
		},
	},
	plugins: [],
};
