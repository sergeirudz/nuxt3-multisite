import type { Config } from 'tailwindcss'
// import tailwindForms from '@tailwindcss/forms'

export default <Partial<Config>>{
  // module.exports = {
  darkMode: 'class',
  content: [
    '../../node_modules/flowbite/**/*.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}',
    './components/**/*.{vue,js,ts}',
    //   './layouts/**/*.vue',
    //   './pages/**/*.vue',
    //   './composables/**/*.{js,ts}',
    //   './plugins/**/*.{js,ts}',
    //   './App.{js,ts,vue}',
  ],
  plugins: [
    require('flowbite'),
    // tailwindForms
  ],
  theme: {
    extend: {
      maxWidth: {},
      fontFamily: {},
    },
  },
  cssPath: '~/assets/styles/plugins/tailwind.css', // or false,
  exposeConfig: true,
}
