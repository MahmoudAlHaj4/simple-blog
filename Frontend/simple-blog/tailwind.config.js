/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#E0E638',
        customBlack: '#141414',
        customGray: '#272727'
      },
      fontFamily: {
        montreal: ['"Neue Montreal"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
