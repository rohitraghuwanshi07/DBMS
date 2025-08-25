/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FCE4E3',
          100: '#F8C9C7',
          200: '#F19490',
          300: '#EA5F58',
          400: '#DF372E',
          500: '#D22F27', // Base color
          600: '#A8251F',
          700: '#7E1C17',
          800: '#54120F',
          900: '#2A0907',
        },
        secondary: {
          50: '#FDFBF7',
          100: '#FCF7EF',
          200: '#F9EFDE',
          300: '#F6E7CE',
          400: '#F2DFBD',
          500: '#F8F0E3', // Base color
          600: '#ECD8AF',
          700: '#E0C08B',
          800: '#D4A967',
          900: '#C99143',
        },
        accent: {
          50: '#FFF8E1',
          100: '#FFEFC3',
          200: '#FFE184',
          300: '#FFD246',
          400: '#F5C211',
          500: '#B8860B', // Base color
          600: '#9E730A',
          700: '#856008',
          800: '#6C4C06',
          900: '#523904',
        },
        dark: {
          50: '#F3F4F6',
          100: '#E7E9ED',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#6B7280',
          500: '#4B5563',
          600: '#374151',
          700: '#1F2937', // Base color
          800: '#111827',
          900: '#0A0D14',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'delhi-pattern': "url('/src/assets/patterns/delhi-pattern.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};