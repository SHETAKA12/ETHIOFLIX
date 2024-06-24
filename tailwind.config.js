/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
        tertiary: "#000000",
        quaternary: "#ffffff",
        quinary: "#000000",
        senary: "#ffffff",
        septenary: "#000000",
      },
      container:{
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem"
        }
      }
    },
  },
  plugins: [],
}