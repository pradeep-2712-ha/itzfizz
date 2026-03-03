/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Sora'", "system-ui", "sans-serif"],
        body: ["'Manrope'", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0B0F14",
        glow: "#9EF01A",
        steel: "#93C5FD",
      },
    },
  },
  plugins: [],
};
