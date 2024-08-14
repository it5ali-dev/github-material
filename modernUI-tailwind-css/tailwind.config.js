/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#01051e",
        "primary-light": "#020726",
        "primary-dark": "#010417",
        secondary: "#ff7d3b",
        gray: "#333",
        white: "#fff",
        blob: "#A427DF",
      },
    },
    container: {
      center: true,
      // padding: {
      //   default: "20px",
      //   md: "50px",
      // },
      screens: {
        sm: "100%", // Small screens
        md: "80%", // Medium screens
        lg: "80%", // Large screens
        xl: "80%", // Extra-large screens
      },
    },
  },
  plugins: [rotateY],
};
