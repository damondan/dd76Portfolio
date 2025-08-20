// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      }
    }
  },
  plugins: [typography]
}