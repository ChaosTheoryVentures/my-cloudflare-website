/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'matrix-green': {
          100: '#b3ffb3',
          200: '#66ff66', 
          300: '#33ff33',
          400: '#00ff41',
          500: '#00cc33',
          600: '#008822',
          700: '#006611',
          800: '#004400',
          900: '#002200'
        }
      },
      fontFamily: {
        mono: ['Courier New', 'monospace']
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'matrix-glow': 'matrix-glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { 
            transform: 'translateY(30px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'matrix-glow': {
          '0%': { textShadow: '0 0 10px rgba(0, 255, 65, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(0, 255, 65, 0.8)' }
        }
      }
    },
  },
  plugins: [],
}