/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    extend: {
      fontFamily: {
        'sans': ["inter",'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular',],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],},
      backgroundImage: {
        'hero': "url('../assets/img/hero.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
