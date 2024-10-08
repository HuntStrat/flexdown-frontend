/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'black': '#000000',
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
        sans: ['Source Sans Pro', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
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
  plugins: [require("tailwindcss-animate")],
}