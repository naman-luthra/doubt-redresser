/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gray': {
          light: '#F1F4F7',
          DEFAULT:'#E0E6EB',
          medium:'#C5CFD8',
          dark:'#9FADB9'
        },
        'blue': '#605EEC',
        'green': {
          light: '#9DD4CF',
          DEFAULT: '#51AB9F'
        }
      }
    },
  },
  plugins: [],
}
