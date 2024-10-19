/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'brand-green': {
					300: '#b9ff66',
				},
				'brand-gray': {
					200: '#f3f3f3',
				},
				'brand-dark': {
					900: '#191f23',
				},
			},
		},
	},
	plugins: [],
};
