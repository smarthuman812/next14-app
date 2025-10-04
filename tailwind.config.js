/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        panel: "#101113",
        text: "#ECEDEF",
        muted: "#A1A1AA",
        red: "#E11D2E",
        "red-500": "#FF1D32",
      },
      boxShadow: {
        glow: "0 0 30px rgba(255,45,45,.25)",
      },
    },
  },
  plugins: [],
};
