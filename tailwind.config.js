/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#020617',
        'terminal-card': '#0b1120',
        'terminal-border': '#1e293b',
        'terminal-text': '#e2e8f0',
        'terminal-muted': '#94a3b8',
        'neon-green': '#22c55e',
        'neon-blue': '#38bdf8',
      },
      boxShadow: {
        glow: 'var(--terminal-glow)',
      },
    },
  },
  plugins: [],
}
