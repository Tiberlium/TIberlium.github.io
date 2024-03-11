/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "node_modules/preline/dist/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      "blue-dark": "#0F172A",
      "gray-light": "#d3dce6",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        200: "#f7fafc",
        800: "#d3dce6",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
    plugins: [require("preline/plugin")],
  },
};
