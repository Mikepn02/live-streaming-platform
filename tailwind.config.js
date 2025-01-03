/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx}',
    './src/components/**/*.{js,ts,jsx}',
    './src/pages/global/**/*.{js,tsx}',
    './src/pages/dashboard-content/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#877EFF",
        "secondary-500": "#FFB620",
        blue: "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark-1": "#000000",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "gray-1": "#697C89",
        glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      screens: {
        xs: "400px",
      }

    },
  },
  plugins: [],
}