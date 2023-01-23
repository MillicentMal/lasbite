/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'logo-font': ['"Dancing Script"', 'cursive', 
      ],
      'main-font': ['Kanit', 'sans-serif']
      },
    },
  },
  plugins: [// Iconify plugin
  addDynamicIconSelectors(),
],
}
