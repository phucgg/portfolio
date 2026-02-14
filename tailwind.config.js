/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🔥 QUAN TRỌNG

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        accent: "#38bdf8",
        text: "#f8fafc",
      },
    },
  },

  plugins: [],
}