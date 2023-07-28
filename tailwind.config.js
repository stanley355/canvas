/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {},
      keyframes: {},
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
