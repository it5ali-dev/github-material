/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    container: {
      padding: {
        default: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "DM Serif Display",
      secondary: "Jost",
    },
    backgroundImage: {
      hero: "url(/assets/images/hero/bg.jpg)",
      grid: "url(/assets/images/grid.png)",
    },
    extend: {
      colors: {
        primary: {
          default: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          default: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};
