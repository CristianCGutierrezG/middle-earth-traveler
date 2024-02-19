/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: 
  ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    colors: {
      'primary':"#2B5A4A",
      'secondary':"#AB8D59",
      'tertiary':"#C7B9B9",
      'darkGreen':"#14312C",
      'lightGreen': "#4B6B56",
      'white': '#ffffff',
      'darkPrimary': '#82626D',
      'darkSecondary': '#404A65',
      'darkTertiary': '#334F67',
      'darkFourth': '#82AAA9',
    },
    textColor: {
      'primary':"#2B5A4A",
      'secondary':"#AB8D59",
      'tertiary':"#C7B9B9",
      'white': '#ffffff',
      'black': '#000',
      'darkPrimary': '#82626D',
      'darkSecondary': '#404A65',
      'darkTertiary': '#334F67',
      'darkFourth': '#82AAA9',
    },
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage:{
          'dosReyes' : "url('../img/Losdosreyes.jpg')",
          'abismoHell' : "url('../img/abismoHell.jpg')",
          'cienagaMuertos' : "url('../img/Cienaga.jpg')",
          'edorasRohan' : "url('../img/edorasRohan.png')",
          'darkForest' : "url('../img/DarkForest.jpeg')",
          'erebor' : "url('../img/erebor.jpg')",
          'gondor' : "url('../img/Gondor.jpg')",
          'hobbitTown' : "url('../img/hobitTown.jpg')",
          'isengard' : "url('../img/Isengard.jpg')",
          'araña' : "url('../img/LaAraña.jpg')",
          'lothlorien' : "url('../img/lothlorien.jpg')",
          'mordor' : "url('../img/Mordor.jpg')",
          'moria' : "url('../img/Moria.jpg')",
          'rivendell' : "url('../img/rivendell.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
  ],
}

