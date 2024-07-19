/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        neon: 'hsl(75, 94%, 57%)',
      },
      fontFamily:{
        sans: [ "Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

