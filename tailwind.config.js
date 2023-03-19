/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        type: "type 3s ease-out",
      },
      keyframes: {
        type: {
          "0%": { width: "0", opacity: "0" },
          // "5%, 10%": { width: "1ch" },
          // "15%, 20%": { width: "2ch" },
          // "25%, 30%": { width: "3ch" },
          // "35%, 40%": { width: "4ch" },
          // "45%, 50%": { width: "4ch" },
          // "55%, 60%": { width: "4ch" },
          // "65%, 70%": { width: "5ch" },
          // "75%, 80%": { width: "6ch" },
          // "85%, 90%": { width: "7ch" },
          // "95%": { width: "10ch" },
          "100%": { with: "100%", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
