const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}', '../../plugins/banner*.js'],
  theme: {
    screens: {
      'xxs': '340px',
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'desktop': '1200px',
      'xl': '1280px',
      '1.5xl': '1440px',
      '2xl': '1536px',
      '3xl': '1792px',
      '4xl': '1920px',
      '5xl': '2100px',
      'smallMobile': { 'raw': '(max-height: 700px)' },
    },
    extend: {
      colors: {
        'primary': '#058ED9',
        'secondary': '#F85E00',
        'tertiary': '#44CF6C',
      },
      fontFamily: {
        'heading': ['Karla', 'sans-serif'],
        'body': ['Merriweather', 'serif']
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
          fontFamily: theme('fontFamily.heading'),
          color: theme('colors.primary')
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
          fontFamily: theme('fontFamily.heading'),
          color: theme('colors.secondary')
        },
        'h3': {
          fontSize: theme('fontSize.lg'),
          fontFamily: theme('fontFamily.heading'),
          color: theme('colors.tertiary')
        },
        'a': {
          fontSize: theme('fontSize.base'),
          fontFamily: theme('fontFamily.body'),
          color: theme('colors.tertiary')
        },
        'p, h4, h5, h6, span': {
          fontSize: theme('fontSize.base'),
          fontFamily: theme('fontFamily.body')
        },
      })
    })
  ]
};
