import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
      },
      fontFamily: {
        'work-sans': ['var(--font-work-sans)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
