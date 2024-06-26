/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'soft-gray': '#f0f0f3',
      },
     boxShadow:{
      'neumorphism-light': '9px 9px 16px #babecc, -9px -9px 16px #ffffff',
        'neumorphism-dark': '5px 5px 10px #bebebe, -5px -5px 10px #ffffff',
     },
     colors:{
      'light-blue': '#cfe0e8',
      'light-gray':'#e0e0e0',
     },
     backgroundImage:{
      'gradient-to-r': 'linear-gradient(to right, #cfe0e8), #e0e0e0',
     }
    },
  },
  variants:{
    extend:{
    },
  },
  plugins: [],
};
