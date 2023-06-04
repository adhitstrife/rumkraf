/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#E0E0E0",
        mainText: "#1B1B1B",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
