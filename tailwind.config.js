/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        myBlack: "#0E0E0E",
        darkGray: "#2B2C2C",
        lightGray: "#B5B5B5",
        mediumGray: '#424242',
        backgroundGray: '#2C2C2B',
        myBlue: "#15CDF2"
      }
    },
  },
  plugins: [],
};
