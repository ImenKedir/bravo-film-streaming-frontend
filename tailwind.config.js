/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bravo-dark": "#383330",
        "bravo-light": "#383330",
        "bravo-accent": "#db6c47",
      },
      fontFamily: {
        Aboreto: "'Aboreto', cursive",
        Alumni: "'Alumni Sans Pinstripe', sans-serif",
        Quicksand: "'Quicksand', sans-serif",
      },
    },
  },
};
