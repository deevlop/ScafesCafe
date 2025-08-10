/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#D2B48C', // Tan
          medium: '#b26846ff', // Sienna
          dark: '#98592cff', // Coffee
        },
        light: '#f7f5f3'
      },
    },
  },
  plugins: [],
}

