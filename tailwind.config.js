/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryOrange:'#e5975b',
        specialBrown:'#e5975b',
        darkerBrown:'#bb6e33',
        showcaseBg:'#36D1DC'
      }
    },
  },
  plugins: [],
}