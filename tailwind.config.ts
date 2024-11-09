import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        'open-sans': ['var(--font-open-sans)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
