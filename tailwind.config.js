/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        gilroy: ["gilroy", "sans-serif"],
      },
      colors: {
        primary: "#45CFDD",
        secondary: "#ecc94b",
        textPrimary: "#001C30",
      },
    },
  },
  plugins: [],
};
