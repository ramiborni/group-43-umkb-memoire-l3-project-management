module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screen:{
      'sm': '600px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',
      '2xl': '2560px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
