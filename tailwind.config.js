module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '2-auto': '1fr auto'
      },
      gridTemplateRows: {
        'auto-2': 'auto 1fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
