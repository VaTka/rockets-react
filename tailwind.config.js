/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': 'Syne',
        'lato': 'Lato',

      },
      content: {
        'arrow': 'url("./assets/Arrow.svg")'
      }
    },
  },
  plugins: [],
}
