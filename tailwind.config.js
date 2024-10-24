/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-dark': '#1F1F1F', // Add custom blue

      },
      screens:{
        'xl':"1312px"
      },
      fontFamily: {
        kaushan: ['Kaushan Script', 'cursive'],
      },

    },
  },
  plugins: [],
}

