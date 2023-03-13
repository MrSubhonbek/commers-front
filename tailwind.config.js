/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: twColors.black,
	white: twColors.white,
	secondary: '#161D25',
	primary: '#FF9902',
	'bg-color': '#F2F2F5',
	aqua: '#268697'
}

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: []
}
