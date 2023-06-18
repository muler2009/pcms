/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans'],
        'Roboto': ['Roboto', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans'],
        'Oswald': ['Oswald', 'sans']
      },
    },
  },
  plugins: [],
}

