/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 3s linear",
        "home-searchbox": "home-searchbox 2s linear",
        "slide-advance-search": "slide-advance-search 2s linear",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "home-searchbox": {
          "0%": { width: "0%" },
          "100%": { width: "66.6%" },
        },
        "slide-advance-search": {
          "0%": { transform: "translateY(-500px);" },
          "100%": { transform: "translateY(5%);" },
        },
      },
    },
  },
  plugins: [],
};
