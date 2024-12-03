/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#f5f5f5',
        dark: '#333333',
        'dark-grey': '#7a7a7a',
        blue: '#3498db',
        'light-blue': '#d6ecf3',
        yellow: '#f1c40f',
        'light-yellow': '#faf2cc',
        orange: '#e67e22',
        'light-orange': '#fde9d4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
