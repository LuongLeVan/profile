/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-rgba': 'rgba(0, 0, 0, 0.75)',
      },

    },
  },
  plugins: [],
}