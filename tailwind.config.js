/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#080c10',
        mint: '#91ffd4',
        'mint-strong': '#45cfa2',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(145, 255, 212, 0.16)',
      },
    },
  },
  plugins: [],
}