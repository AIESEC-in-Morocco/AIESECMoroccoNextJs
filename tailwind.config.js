/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
      },
      colors: {
        primary: "#037EF3",
        gv: "#f85a40",
        gta: "#0cb9c1",
        gte: "#f48924",
      },
    },
  },
  plugins: [],
};
