/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0040e6',
        'secondary': '#846d53'
      },
      fontSize: {},
      container: {
        center: true,
        padding: "1rem",

      }
    },
  },
  plugins: [],
}

