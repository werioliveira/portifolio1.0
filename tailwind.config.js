/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald"],
        LeagueSpartanBold: ["League Spartan Bold"],
        FjallaOneRegular: ["FjallaOne-Regular"],
        Rajdhani: ["Rajdhani"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
