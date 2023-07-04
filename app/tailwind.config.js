/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Oswald: ['Oswald', 'sans'],
        Roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'bg-img': "url('/src/assets/images/bg-image.png')",
        //'main-bg': "url('/src/assets/images/main-bg.jpeg')",
        'main-bg': "url('/src/assets/images/main.png')",

      },
    },
  },
  plugins: [],
}

