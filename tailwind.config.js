/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        DM: ["Josefin Sans", "sans-serif"]
      },
      backgroundColor: {
        'primary': '#171823'
      }
    },
  },
  plugins: [],
}
