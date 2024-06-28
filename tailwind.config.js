/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#6652FD',
        'hoverblue': '#4F3FC7',
        'disabledblue': '#B6ADFB',
        'black': '#151616'
      },
      animation: {
        "spin-slow": "spin 10s linear infinite"
      }
    },
  },
  plugins: [],
}
