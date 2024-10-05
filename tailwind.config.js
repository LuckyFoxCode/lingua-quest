/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        n0: '#E2572B',
        n1: '#1E1D30',
        n2: '#D2ED69',
        n3: '#FFE251',
        n4: '#E0CDFF',
        n5: '#FDC2F5',
      },
    },
  },
  plugins: [],
};
