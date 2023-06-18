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
        'bold': '3px 3px 3px black'
      }
    }
  },
  plugins: []
};
