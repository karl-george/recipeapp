/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gradientStart: '#EA7A22',
        gradientEnd: '#F5A150',
        faded: '#AEAAAA',
        bgFaded: '#F6F6F6',
        accent: '#EA7A22',
      },
    },
  },
  plugins: [],
};
