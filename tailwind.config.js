/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          primary: "#172554",
        },
      },
      keyframes: {
        visible: {
          "0%": { opacity: 0, visibility: "hidden" },
          "100%": { opacity: 1, visibility: "visible" },
        },
      },
      animation: {
        "visible-forward": "visible 0.5s ease-in-out forwards",
      },
    },
  },
};
