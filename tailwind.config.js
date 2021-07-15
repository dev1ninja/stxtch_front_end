module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './containers/**/*.{js,jsx}', './blockPages/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'main': '#CED3E3',
        '1e': '#1E2023'
      },
    },
    screens: {
      'sm': '414px',
      'md': '834px',
      'lg': '874px',
      'xl': '946px',
      '2xl': '1440px',
    }
  },
  variants: {},
  plugins: []
}
