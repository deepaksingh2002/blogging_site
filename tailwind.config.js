/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F26A1B',       // Vibrant Orange
        secondary: '#3DAEF2',     // Sky Blue
        accent: '#48B87C',        // Leaf Green
        warning: '#E95454',       // Soft Red
        dark: '#1A1A2E',          // Dark Navy
        light: '#F9F9F9',         // Light Gray
        background: '#FFFFFF',    // White
        aqua: '#4BC4C0',          // Deep Aqua
        beige: '#F4EDE5',         // Muted Beige
      },
    },
  },
  plugins: [],
}

