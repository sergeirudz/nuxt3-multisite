import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: 'jit',
  content: [
    '../../node_modules/flowbite/**/*.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
  ],
  plugins: [require('flowbite')],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '15px',
        lg: '15px',
        xl: '0',
        '2xl': '0',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      maxWidth: {},
      fontFamily: {},
      boxShadow: {},
      keyframes: {},
      animation: {},
    },
  },
  cssPath: '~/assets/styles/plugins/tailwind.css', // or false,
  exposeConfig: true,
}
