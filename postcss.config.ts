import tailwindPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

/**
 * PostCSS config in TypeScript. This requires `ts-node` (already added to devDependencies)
 * so PostCSS/Tailwind can load this file at runtime. Keeping the config in TS gives
 * you type checking and editor autocompletion.
 */
const config = {
  plugins: [tailwindPostcss, autoprefixer],
};

export default config;
