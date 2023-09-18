import type { Config } from 'tailwindcss'

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
      maxWidth: {},
      fontFamily: {},
    },
  },
  cssPath: './assets/styles/common/plugins/tailwind.css', // or false,
  exposeConfig: true,
}
