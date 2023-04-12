/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: twColors.black,
	white: twColors.white,
	secondary: '#161D25',
	primary: '#FF9902',
	'bg-color': '#F2F2F5',
	aqua: '#268697',
	gray: '#CDCDC0',
	red: twColors.red[400]
}

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		extend: {
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-ii-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: []
}
