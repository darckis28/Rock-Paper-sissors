/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        "Dark-Text": "hsl(229, 25%, 31%)",
        "Score-Text": "hsl(229, 64%, 46%)",
        "Header-Outline": "hsl(217, 16%, 45%)",
      },
      backgroundImage: {
        "Scissors-Gradient":
          "linear-gradient(hsl(39, 89%, 49%), hsl(40, 57%, 53%))",
        "Paper-Gradient":
          "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "Rock-Gradient":
          "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        "Lizard-Gradient":
          "linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        "Radial-Gradient":
          "linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        Cyan: "linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
      },
    },
  },
  plugins: [],
};
