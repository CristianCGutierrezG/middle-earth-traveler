/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    colors: {
      'primary':"#2B5A4A",
      'secondary':"#AB8D59",
      'tertiary':"#C7B9B9",
    },
    textColor: {
      'primary':"#2B5A4A",
      'secondary':"#AB8D59",
      'tertiary':"#C7B9B9",
    },
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundIMage:{
          'dosReyes' : "url('../public/img/Losdosreyes.jpg')",
          'abismoHell' : "url('../public/img/abismoHell.jpg')",
          'cienagaMuertos' : "url('../public/img/Cienaga.jpg')",
          'edorasRohan' : "url('../public/img/edorasRohan.png')",
          'darkForest' : "url('../public/img/DarkForest.jpeg')",
          'erebor' : "url('../public/img/erebor.jpg')",
          'gondor' : "url('../public/img/Gondor.jpg')",
          'hobbitTown' : "url('../public/img/hobitTown.jpg')",
          'isengard' : "url('../public/img/Isengard.jpg')",
          'araña' : "url('../public/img/LaAraña.jpg')",
          'lothlorien' : "url('../public/img/lothlorien.jpg')",
          'mordor' : "url('../public/img/mordor.jpg')",
          'moria' : "url('../public/img/moria.jpg')",
          'rivendell' : "url('../public/img/rivendell.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
  ],
}

