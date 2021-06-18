module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '2-auto': '1fr auto'
      },
      backgroundImage: theme => ({ 
        'home': "url('/src/img/5.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
