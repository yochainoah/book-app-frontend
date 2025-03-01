/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FFCE1A',
          secondary: '#0D0842',
          'text-black-bg': '#FFFFF8',
          'website-bg': '#FFFFFF',
          discount: '#6C6C6C',
          favorite: '#FF5841',
        },
        fontFamily: {
          primary: ['Montserrat', 'sans-serif'],
          secondary: ['Nunito Sans', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }