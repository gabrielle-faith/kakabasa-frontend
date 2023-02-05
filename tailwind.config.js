/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom_primary: '#4F5D75',
        custom_secondary: '#BFC0C0',
        custom_white: '#FFFFFF',
        custom_dark: '#2D3142',
        custom_warning: '#EF8354',
      },
    },
  },
  plugins: [],
}
