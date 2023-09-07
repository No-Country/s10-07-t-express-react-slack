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
        "bg": "#1D1A39",
        "background": "#0C1C34",
        "background-container-workspace": "#E4DCCC",
        "text-workspace": "#263238",
        "bg-profile": "#25254D"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'bg-landing': "url('/src/assets/bg-image-landing1.png')",
        'bg-register': "url('./src/assets/aurotas.png')"
    },
  },
  plugins: [],
}
}

