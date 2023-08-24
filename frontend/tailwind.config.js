/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secundary-color": "#4A154B", 
        "bg-navbar":"#391544",
        "button-orange": "#F39F5A",
        "bg": "#1D1A39"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'bg-landing': "url('/src/assets/bg-image-landing1.png')",
    },
    
    "navbar-btn": "bg-button-orange rounded-3xl text-white pt-3 px-5 h-12"
    
  },
  plugins: [],
}
}

