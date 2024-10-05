import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const base = process.env.VITE_BASE_URL || '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
