/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: " Bebas Neue,sans-serif",
    },

    extend: {
      colors: {
        colo: "#EDFF7A",
      },
    },
  },
  plugins: [],
};

