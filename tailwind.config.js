/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'grey',
        // secondary: '#A288A6',
        accent: 'orange',
        lightBackground: '#b3b3b3',
        darkBackground: '#8d8d8d'
      },
      fontFamily: {
        russoOne: ['Russo One', 'sans-serif']
      },
      dropShadow: {
        bold: '3px 3px 3px black',
        semiBold: '1px 1px 3px black'
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: []
};
