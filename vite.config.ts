import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@react-native-async-storage/async-storage': resolve(__dirname, 'src/shims/async-storage-web.js'),
    },
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js'],
  },
  define: {
    // Required for react-native-reanimated
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    // Required for react-native
    Platform: JSON.stringify({ OS: 'web' }),
    // Add any other global variables your app needs
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['react-native-web', 'react-native-safe-area-context', 'react-native-screens', '@react-native-async-storage/async-storage'],
    esbuildOptions: {
      mainFields: ['module', 'main'],
      resolveExtensions: ['.web.js', '.js', '.ts', '.jsx', '.tsx'],
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
