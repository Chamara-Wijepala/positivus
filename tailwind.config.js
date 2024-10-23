/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'brand-green': {
					300: '#b9ff66',
					500: '#8aff00',
				},
				'brand-gray': {
					200: '#f3f3f3',
				},
				'brand-dark': {
					900: '#191a23',
					700: '#3b3d53',
				},
			},
			fontFamily: {
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
			},
			screens: {
				// Required for the logo scroller
				xs: '520px',
			},
			keyframes: {
				scroll: {
					to: {
						// The value the percentage is being subtracted by must always be
						// half of the gap of the scroll list.
						transform: 'translateX(calc(-50% - 1.25rem))',
					},
				},
				'scroll-desktop': {
					to: {
						// The value the percentage is being subtracted by must always be
						// half of the gap of the scroll list.
						transform: 'translateX(calc(-50% - 2.5rem))',
					},
				},
			},
		},
	},
	plugins: [],
};
