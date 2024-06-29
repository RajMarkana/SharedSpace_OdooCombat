/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#2498b6  ",
        secondary : "#001C32",
      },
      boxShadow: {
        '3xl': '#2498b6 0px 7px 29px -10px',
        '4xl':'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
      }
    },
  },
  plugins: [],
}