/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#e6fff2',
          100: '#ccffe6',
        },
      },
    },
  },
  plugins: [],
}
