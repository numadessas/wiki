/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ee6f22',
          green: '#93FF78',
          purple: '#734578',
          black: '#0a0a0a',
        }
      },
      fontFamily: {
        title: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: '"DM Sans", sans-serif',
            maxWidth: 'none',
          }
        }
      }
    },
  },
  plugins: [],
}
