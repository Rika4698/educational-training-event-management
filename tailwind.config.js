/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        darkColor:"#000",
        primaryColor: '#00B8FF',
        secondaryColor: '#001F2B',
        shadesOfBlue: '#00719c',
        mainGray: '#e5e5e5'
      },
    },
  },
  plugins: [require("daisyui")],
}

