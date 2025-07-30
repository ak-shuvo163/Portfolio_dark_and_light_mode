/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  // content: ["./src/**/*.{html,js}"],
  safelist: ['right-[-100%]', 'right-0'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

