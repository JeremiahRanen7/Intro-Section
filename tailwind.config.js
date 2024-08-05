/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        AlWhite: 'hsl(0, 0%, 98%)',
        midGray: 'hsl(0, 0%, 41%)',
        darkBlack: 'hsl(0, 0%, 8%)',      
      },
      fontFamily: {
        epilogue:["Epilogue", "sans-serif"]
      }
    },
  },
  plugins: [],
}

