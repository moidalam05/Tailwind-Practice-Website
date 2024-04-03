/** @type {import('tailwindcss').Config} */
export const content = ['./*.{html,js}'];
export const theme = {
	extend: {
		colors: {
			primary: '#ee0181',
			secondary: '#01ee91',
		},
		fontFamily: {
			primary: ['Poppins', 'sans-serif'],
			secondary: ['Inter', 'sans-serif'],
		},
	},
};
export const plugins = [];
