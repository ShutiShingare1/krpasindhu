/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D82A2A',
          redHover: '#B81D1D',
          green: '#2F7D3C',
          gold: '#F4C21D',
          purple: '#4B2B63',
          dark: '#111111'
        },
        navy: {
          bg: '#071426',
          surface: '#0D1D33',
          card: '#132742',
          border: '#1E3A5F',
          text: '#F7FAFC',
          muted: '#AAB8C8',
          accent: '#3B82F6'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
