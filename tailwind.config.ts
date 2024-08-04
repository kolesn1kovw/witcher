import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '64px',
        md: '64px',
        lg: '16px',
        xl: '16px',
      },
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1230px',
    },
    fontFamily: {
      primary: 'var(--font-FuturaPT)',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-cover-mobile.png')",
        'hero-pattern-md': "url('/images/hero-cover-tablet.png')",
        'hero-pattern-lg': "url('/images/hero-cover.png')",
      },

      boxShadow: {
        md: '0 2px 24px 0 rgba(255, 30, 30, 0.5)',
      },

      colors: {
        primary: '#181818',
        accent: {
          DEFAULT: '#EC3F3F',
          hover: '#FF1E1E',
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
} satisfies Config;

export default config;
