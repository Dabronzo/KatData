/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

