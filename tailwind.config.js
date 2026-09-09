/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#07080c',
          900: '#0a0c12',
          850: '#0e1119',
          800: '#12151f',
          700: '#1a1e2b',
        },
        line: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#3b82f6',
          cyan: '#22d3ee',
          violet: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'dash-flow': {
          to: { strokeDashoffset: '-24' },
        },
        'pulse-node': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'dash-flow': 'dash-flow 1.2s linear infinite',
        'pulse-node': 'pulse-node 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
