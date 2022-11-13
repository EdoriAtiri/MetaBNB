/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        redRose: ['Red Rose', 'cursive'],
      },
      colors: {
        'meta-grey': '#434343',
        'meta-white': '#F7F7F7',
      },
      backgroundImage: {
        'purple-grad': 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
      },
    },
  },
  plugins: [],
}
