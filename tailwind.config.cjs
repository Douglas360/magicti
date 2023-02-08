/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "home-section": "url('/src/assets/bg-section-1.png')",
        "service-section": "url('/src/assets/bg-section-1.jpg')"
      }
    },
  },
  plugins: [],
}
