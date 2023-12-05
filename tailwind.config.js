/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,css}"],
  theme: {
    extend: {
        fontFamily:{'Kanit':['Kanit', 'sans-serif'] , 'Hind':['Hind', 'sans-serif']
                      }

    },
    
  },
  plugins: [],
}