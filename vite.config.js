import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 10000, // Increase chunk size warning limit to 10 MB
    sourcemap: true, 
  },
  server: {
    open: true, 
  },
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
});
