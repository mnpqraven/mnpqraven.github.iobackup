module.exports = {
  purge: [],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      width: ['responsive', 'hover', 'focus'],
      height: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
