module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    }),
  ],
}
