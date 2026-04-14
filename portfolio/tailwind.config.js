/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        background: '#0A0A0A',
        surface: 'rgba(255, 255, 255, 0.04)',
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.65)',
        border: 'rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}