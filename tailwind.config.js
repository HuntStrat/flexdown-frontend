/** @type {import('tailwindcss').Config} */

import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    colors: {
      'primary': '#010948',
      'facebook': '#1877F2',
      'instagram': '#c5377d',
      'mail': '#DB4437',
      'linkedin' : '#0077B5',
      'black': '#000000',
      'gray' : '#888',
      'white' : '#ffffff',
      'logo': '#3258a3',
      'purple': '#702dda',
      
            },
    container: {
      center: true,

      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      
    },
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      screens: {
        slg: '960px',
      },
         backdropFilter: {
        "blur-5": "blur(5px)",
      },
      backgroundColor: {
        glass: "rgba(255,255, 255, 0.8)",
      },
      borderColor: {
        glass: "rgba(255,255, 255, 0.3)",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0,0,0, 0.1)",
      },
      borderRadius: {
        glass: "16px",
      },
      backgroundImage: {
        'real-estate-background': "url('/src/assets/images/real-estate.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "color-cycle": {
          '0%, 100%': { color: '#ffffff' },
          '50%': { color: '#702dda' },  // Ensure colors match those defined above
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "color-cycle": "color-cycle 5s infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}