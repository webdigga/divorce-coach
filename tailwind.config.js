module.exports = {
  content: [
    './src/**/*.{html,njk,js}',
    './src/index.html',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'xs': '440px'
      },
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
