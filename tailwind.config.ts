import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'inter': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'], // Overriding inter to map to our new font
        'space-grotesk': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'], // Overriding space-grotesk
      },
      borderRadius: {
        lg: '0px',
        md: '0px',
        sm: '0px',
        DEFAULT: '0px',
      },
      colors: {
        background: '#0B1120',
        foreground: '#E2E8F0',
        card: {
          DEFAULT: '#111827',
          foreground: '#E2E8F0',
        },
        popover: {
          DEFAULT: '#111827',
          foreground: '#E2E8F0',
        },
        primary: {
          DEFAULT: '#EB0028',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#111827',
          foreground: '#E2E8F0',
        },
        muted: {
          DEFAULT: '#111827',
          foreground: '#94A3B8',
        },
        accent: {
          DEFAULT: '#5EEAD4',
          foreground: '#0B1120',
        },
        destructive: {
          DEFAULT: '#EB0028',
          foreground: '#FFFFFF',
        },
        border: '#111827',
        input: '#111827',
        ring: '#EB0028',
        // Custom Elysium Palette
        'elysium-main': '#0B1120',
        'elysium-card': '#111827',
        'elysium-text': '#E2E8F0',
        'elysium-heading': '#FFFFFF',
        'elysium-gold': '#FFD700',
        'elysium-teal': '#5EEAD4',
        'ted-red': '#EB0028',
      },
      backgroundImage: {
        'none': 'none',
      },
      boxShadow: {
        'glow-teal': '0 0 20px rgba(94, 234, 212, 0.4)',
        'lift': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
