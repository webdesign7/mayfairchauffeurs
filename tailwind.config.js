/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./fleet.html",
    "./weddings.html",
    "./car-page.html",
    "./contact.html",
    "./**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '1240px',
      },
    },
    extend: {
      colors: {
        grey: {
          50: '#EBEBEB',
          100: '#B9B9B9',
          200: '#CECECE',
          250: '#393939',
          300: '#F2F2F2',
          400: '#C5C5C5FF',
          500: '#848484',
          600: '#2A2A2A',
        },
        red: {
          800: '#960001',
          900: '#760203',
          950: '#490000',
        }
      },
      backgroundImage: {
        'mp-hero': "url('/assets/images/hero.png')",
        'accordion2-bg': "url('/assets/images/accordion/full-bg1.jpg')",
        'accordion1-bg': "url('/assets/images/accordion/full-bg2.jpg')",
        'accordion3-bg': "url('/assets/images/accordion/full-bg3.png')",
        'gradient-grey': 'linear-gradient(90deg, #2A2A2A 0%, #FFFFFF 100%)',
        'footer-bg-gradient': 'linear-gradient(356deg, #030303 25%, rgba(3, 3, 3, 0.00) 110%);',
        'linear-65': 'linear-gradient(90deg, rgb(0 0 0 / 70%) 0%, transparent 210%)',
        'contact-separator-gradient': 'linear-gradient(to right, #FFFFFF 0%, #2A2A2A 50%, #FFFFFF 100%)'
      },
      maxWidth: {
        'container': '1160px',
        'logo': '168px',
      },
      fontFamily: {
        sans: ['Gotham', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        gotham: ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
}