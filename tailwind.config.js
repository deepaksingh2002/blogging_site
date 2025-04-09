/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',       // Coral Red (for header, highlights)
        accent: '#4ECDC4',        // Tropical Blue (for buttons, CTA)
        background: '#F7FFF7',    // Soft White (main site background)
        text: '#1A1A1A',          // Rich Black (main text)
        subtext: '#555555',       // Gray (for descriptions, muted text)
        white: '#FFFFFF',         // For cards/sections
      },
    },
  },
  plugins: [],
}

