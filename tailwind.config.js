/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slide-down 2s linear",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "scaleY(0)" },
          "25%": { transform: "scaleY(0.25)" },
          " 50%": { transform: "scaleY(0.5)" },
          "75%": { transform: "scaleY(0.75)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};
