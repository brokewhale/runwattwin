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
      },
    },
  },
  plugins: [],
}
