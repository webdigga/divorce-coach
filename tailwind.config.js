module.exports = {
  content: [
    './src/**/*.{html,njk,js,md}',
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
      colors: {
        // Warm & Human Color Palette
        primary: {
          DEFAULT: '#C9A9A6',  // Dusty Rose
          dark: '#A67F7B',     // Deep Rose
          light: '#D9C4C2',    // Light Rose
        },
        secondary: '#F5E6E0',  // Blush Pink
        accent: '#7D9B8E',     // Sage Green
        dark: '#4A4545',       // Warm Charcoal
        'light-bg': '#FDF9F8', // Warm Cream
        cream: '#FDF9F8',
        blush: '#F5E6E0',
        rose: {
          DEFAULT: '#C9A9A6',
          dark: '#A67F7B',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
