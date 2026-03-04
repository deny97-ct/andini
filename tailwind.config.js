/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        rose: {
          700: '#be123c',
        },
        stone: {
          50: '#fafaf9',
          800: '#292524',
        }
      }
    },
  },
  plugins: [],
}
