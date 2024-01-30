/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../assets/img/hero.webp')",
      }
    },
  },
  plugins: [],
}

