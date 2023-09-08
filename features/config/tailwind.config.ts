import type { Config } from 'tailwindcss'
import tailwindTheme from './tailwindTheme'

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
      colors: tailwindTheme,
      fontFamily: {},
    },
  },
  cssPath: '~/assets/css/tailwind.css', // or false,
  exposeConfig: true
}
