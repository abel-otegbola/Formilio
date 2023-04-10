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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        'display': ['Oswald'],
        'body': ['"Inter"', ...defaultTheme.fontFamily.sans ]
      },
      colors: {
        'blue': '#6652FD',
        'hoverblue': '#4F3FC7',
        'disabledblue': '#B6ADFB'
      },
      animation: {
        "spin-slow": "spin 10s linear infinite"
      }
    },
  },
  plugins: [],
}
