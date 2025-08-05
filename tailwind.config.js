/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          navy: {
            900: "#0f172a",
            800: "#1e293b",
            700: "#334155",
          },
          brand: {
            blue: "#3B82F6",
            teal: "#14B8A6",
            orange: "#F97316",
          },
        },
        zIndex: {
          100: "100",
        },
        height: {
          "screen-140": "calc(100vh - 140px)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        charter: ["Charter", "serif"],
        raleway: ["Raleway", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
});
