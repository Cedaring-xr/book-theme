import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			fontFamily: {
				'barlow-condensed': 'var(--font-barlow-condensed)',
				'inter-medium': 'var(--font-inter)',
				pacifico: 'var(--font-pacifico)'
			}
		}
	},
	plugins: []
} satisfies Config
