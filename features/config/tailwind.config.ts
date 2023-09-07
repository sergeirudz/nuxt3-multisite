import type { Config } from 'tailwindcss'
import tailwindTheme from './tailwindTheme'
// const plugin = require('tailwindcss/plugin')
// import hexRgb from 'hex-rgb'


// function getRgbChannels(hex: string) {
//   const { red, green, blue } = hexRgb(hex)
//   return `${red} ${green} ${blue}`
// }

export default <Partial<Config>>{
  // module.exports = {
  darkMode: 'class',
  // content: [
  //   './components/**/*.{vue,js,ts}',
  //   './layouts/**/*.vue',
  //   './pages/**/*.vue',
  //   './composables/**/*.{js,ts}',
  //   './plugins/**/*.{js,ts}',
  //   './App.{js,ts,vue}',
  // ],
  theme: {
    extend: {
      maxWidth: {
      },
      colors: {
        green: tailwindTheme.green,
        blue: tailwindTheme.blue,
        red: tailwindTheme.red,
        primary: {
          50: tailwindTheme.blue[50],
          100: tailwindTheme.blue[100],
          200: tailwindTheme.blue[200],
          300: tailwindTheme.blue[300],
          400: tailwindTheme.blue[400],
          500: tailwindTheme.blue[500],
          600: tailwindTheme.blue[600],
          700: tailwindTheme.blue[700],
          800: tailwindTheme.blue[800],
          900: tailwindTheme.blue[900],
        },
      },
      fontFamily: {
      },
    },
    plugins: [
      // https://tailwindcss.com/docs/plugins
      // plugin(function({ addBase ,addUtilities, addComponents, e, config }) {
      //   addBase({
      //     ':root': {
      //       '--primary-50': '#3BA676',
      //     },
      //   })
      //   config({
      //     theme: {
      //       extend: {
      //         colors: {
      //           primary: {
      //             50: getRgbChannels(tailwindTheme.blue['50']),
      //             100: getRgbChannels(tailwindTheme.blue['100']),
      //             200: getRgbChannels(tailwindTheme.blue['200']),
      //             300: getRgbChannels(tailwindTheme.blue['300']),
      //             400: getRgbChannels(tailwindTheme.blue['400']),
      //             500: getRgbChannels(tailwindTheme.blue['500']),
      //             550: '#000',
      //             600: getRgbChannels(tailwindTheme.blue['600']),
      //             700: getRgbChannels(tailwindTheme.blue['700']),
      //             800: getRgbChannels(tailwindTheme.blue['800']),
      //             900: getRgbChannels(tailwindTheme.blue['900']),
      //           },
      //         },
      //       },
      //     },
      //   })

      // }
      // ),
    ]
  },
  cssPath: '~/assets/css/tailwind.css', // or false,
  exposeConfig: true
}
