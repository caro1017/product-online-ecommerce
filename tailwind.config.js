/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: '440px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#434043',
      'white': '#FFFFFF',
      'grey': '#939598',
      'lightGrey': '#F4F2ED',
      'salmon': '#D0665B',
      'lightBlue': '#9ACCE5',
      'yellow': '#E3A645',
    },
  },
  plugins: [],
};
