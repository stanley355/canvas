/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 2s linear",
        "home-searchbox": "home-searchbox 2s linear"
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
      },
    },
  },
  plugins: [],
};
