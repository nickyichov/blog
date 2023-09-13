/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(30%)' },
          '100%': { transform: 'translateX(-70%)' },
        }
      },
    },
  },
  plugins: [],
}