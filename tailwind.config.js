/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'silver': {
          50: '#F8F8F8',
          100: '#E8E8E8',
          200: '#D4D4D4',
          300: '#BCBCBC',
          400: '#A0A0A0',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        'old-english': ['var(--font-playfair-display)', 'serif'],
        'typewriter': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
