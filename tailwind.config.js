/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {

    extend: {
      colors:{
        'Saphire':{
          Orange:"#F5862C",
          Blue:"#2A3C47",
        }
      },
      fontFamily: {
        'sans': ["inter",'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular',],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],},
      backgroundImage: {
        'hero': "url('../assets/img/hero.webp')",
        'smile': "url('../assets/img/hero.webp')",
        'implant': "url('../assets/img/hero.webp')",
        'crown': "url('../assets/img/hero.webp')",
        'treatment': "url('../assets/img/hero.webp')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
