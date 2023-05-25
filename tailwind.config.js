/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e2a53',
        blue: '#025efe',
        'gradient-1': '#e7ecef',
        'gradient-2': '#eff5f9',
        'card': '#fefefeD9'
      }
    },
  },
  plugins: [],
}

