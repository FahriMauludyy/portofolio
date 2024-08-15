/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          primary: '#10100E',
          secprimary: '#FFFFE3',
        },
        fontFamily:{
          'sato': ['satoshi', 'sans-serif'],
          'custom': ['jersey', 'sans-serif']
        }
      },
    },
    plugins: [],
  }