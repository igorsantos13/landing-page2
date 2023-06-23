/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my-start-color': 'rgba(7,7,9,1) 6.5%',
        'my-middle-color': '#C850C0',
        'my-end-color': 'rgba(27,24,113,1) 93.2%'
      }
    },
  },
  plugins: [],
}