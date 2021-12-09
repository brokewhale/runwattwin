const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Code Pro', ...defaultTheme.fontFamily.sans],
        fancy: ['Dancing Script'],
        playfair: ['Playfair Display'],
      },
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        mainBg: '#F1EDE9',
        borderGray: '#424242',
        buttonBlue: '#B6D3FF',
      },
      backgroundImage: {
        sidePattern: "url('/assets/sidePattern.png')",
      },
    },
    screens: {
      'break-tablet': { max: '1330px' },
      'break-xsmobile': { max: '500px' },
    },
  },
  plugins: [],
}
