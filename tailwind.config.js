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
					border: 'rgba(255, 255, 255, 0.23)',
				},
			},
      gridTemplateRows: {
        layout: 'minmax(0, min(10vh, 4.375rem)) 1fr minmax(0, min(10vh, 4.375rem))'
      }
		},
	},
	plugins: [],
};
