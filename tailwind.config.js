/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      colors: {
        darkSlateGrey: '#242742',
        charcoalGrey: '#36384e',
        grey: '#9294a0',
        pinkish: '#fd5478',
        orange: '#fe6b3f',
      },
      fontSize: {
        title: '2.35rem;',
        paragraph: '1rem;',
      },
      fontWeight: {
        bold: '700',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      listStyleImage: {
        checkmark: 'url("../assets/images/icon-list.svg")',
      },
    },
  },
  plugins: [],
};
