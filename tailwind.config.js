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
        "bravo-light": "#f5f2ef",
        "bravo-accent": "#db6c47",
      },
      fontFamily: {
        Aboreto: "'Aboreto', cursive",
        Oswald: "'Oswald', sans-serif;",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
