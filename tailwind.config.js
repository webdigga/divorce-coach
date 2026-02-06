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
        // Warm & Human Color Palette - Warm Plum + Teal
        primary: {
          DEFAULT: '#8B4570',  // Warm Plum
          dark: '#6B2E54',     // Deep Plum
          light: '#A86B90',    // Light Plum
        },
        secondary: '#F3E8EF',  // Soft Lavender
        accent: '#1B7A6E',     // Deep Teal
        dark: '#140F0F',       // Near Black
        'light-bg': '#FBF7FA', // Warm Lavender Cream
        cream: '#FBF7FA',
        blush: '#F3E8EF',
        rose: {
          DEFAULT: '#8B4570',
          dark: '#6B2E54',
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
      typography: {
        DEFAULT: {
          css: {
            color: '#140F0F',
            maxWidth: 'none',
            a: {
              color: '#6B2E54',
              textDecoration: 'underline',
              '&:hover': {
                color: '#8B4570',
              },
            },
            strong: {
              color: '#140F0F',
            },
            h2: {
              color: '#140F0F',
            },
            h3: {
              color: '#140F0F',
            },
            h4: {
              color: '#140F0F',
            },
            blockquote: {
              color: '#140F0F',
              borderLeftColor: '#8B4570',
            },
            'thead th': {
              color: '#140F0F',
            },
            code: {
              color: '#6B2E54',
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
