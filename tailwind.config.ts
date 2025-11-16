import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './site/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVar', 'Inter', 'ui-sans-serif', 'system-ui'],
        rasmus: ['Rasmus', 'InterVar', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [animate],
};

export default config;
