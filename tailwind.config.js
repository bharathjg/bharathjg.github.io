/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // Blue
          dark: '#60A5FA'
        },
        secondary: {
          light: '#6EE7B7', // Teal accent
          dark: '#34D399'
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827'
        },
        text: {
          light: '#1F2937',
          dark: '#F9FAFB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 