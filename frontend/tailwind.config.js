/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-navbar":"#181F6D",
        "button-orange": "#F39F5A"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
    
    "navbar-btn": "bg-button-orange rounded-3xl text-white pt-3 px-5 h-12"
    
  },
  plugins: [],
}

