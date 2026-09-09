import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works at any path — root domain or a GitHub
  // Pages project subpath (e.g. /portfolio/) — without rebuilding.
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssMinify: true,
  },
});
