/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      josef: ["Josefin Sans"],
    },
    extend: {
      colors: {
        "light-pink": "#CE9898",
        "black": "#423A3A",
        "pink": "#F8BFBF",
        "dark-pink": "#EE8B8B",
        "very-light-pink":"#f4caca"
      },
    },
  },
  plugins: [],
};
