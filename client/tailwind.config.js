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
          medium: '#A0522D', // Sienna
          dark: '#6F4E37', // Coffee
        },
      },
    },
  },
  plugins: [],
}

