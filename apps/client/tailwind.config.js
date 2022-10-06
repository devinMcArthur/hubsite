/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      "8xl": "90rem",
    },
    extend: {
      spacing: {
        nav: "3.4rem",
      },
    },
  },
  plugins: [],
};
