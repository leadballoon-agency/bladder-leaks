/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f7f4',
          100: '#e5efe9',
          200: '#cbdfd3',
          300: '#b1cfbd',
          400: '#97bfa7',
          500: '#588068', // Sage Green - Main brand color
          600: '#4d7059',
          700: '#42604a',
          800: '#37503b',
          900: '#2c402c',
        },
        sage: {
          50: '#fdf2f1',
          100: '#fbe5e2',
          200: '#f7cbc5',
          300: '#f3b1a8',
          400: '#ef978b',
          500: '#E5B0A4', // Dusty Rose - Secondary accent
          600: '#d89083',
          700: '#cb7062',
          800: '#be5041',
          900: '#b13020',
        },
        taupe: {
          50: '#faf8f7',
          100: '#f5f1ef',
          200: '#ebe3df',
          300: '#e4d4c8', // Warm Taupe
          400: '#d8c2b0',
          500: '#ccb098',
          600: '#b89e80',
          700: '#a48c68',
          800: '#907a50',
          900: '#7c6838',
        },
        mauve: {
          50: '#f5f3f1',
          100: '#ebe7e3',
          200: '#d7cfc7',
          300: '#c3b7ab',
          400: '#af9f8f',
          500: '#9D8A76', // Mauve Brown
          600: '#8d7a66',
          700: '#7d6a56',
          800: '#6d5a46',
          900: '#5d4a36',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f5f3f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#333333',
          900: '#101010',
        }
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'sans': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}