/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Oswald: ['Oswald', 'sans']
      },
      backgroundImage: {
        'bg-img': "url('/src/assets/images/bg-image.png')",
      },
    },
  },
  plugins: [],
}

