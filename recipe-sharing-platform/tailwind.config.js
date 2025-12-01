/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // root HTML file
    "./public/index.html",  // include public folder just in case
    "./src/**/*.{js,jsx,ts,tsx}" // all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
