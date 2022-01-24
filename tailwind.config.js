const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2-auto': '1fr auto',
        '3-auto': '1fr 1fr auto'
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
})
