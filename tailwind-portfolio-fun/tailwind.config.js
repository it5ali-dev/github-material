/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        body: "#E4F9F5",
        context: "#66BFBF",
        "context-dark": "#11999E",
        new: "#2CCDB6",
      },
      fontFamily: {
        sacramento: ["Sacramento", "cursive"],
      },
      fontWeight: {
        sacramento: "700", // Custom font weight for Sacramento
      },
    },
  },
  plugins: [],
};
