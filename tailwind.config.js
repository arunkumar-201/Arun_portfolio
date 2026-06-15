/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#05070d',
        panel: 'rgba(255, 255, 255, 0.075)',
        line: 'rgba(255, 255, 255, 0.13)',
        mint: '#5fffd2',
        cyan: '#66d9ff',
        violet: '#a78bfa',
        coral: '#ff8d7a'
      },
      boxShadow: {
        glow: '0 0 80px rgba(102, 217, 255, 0.24)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.38)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 7s linear infinite'
      }
    }
  },
  plugins: []
};
