import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Add other aliases if needed
    },
  },
  server: {
    port: 3000, // Default dev server port
    open: true, // Automatically open browser
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Clear dist folder before build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      },
    },
  },
  base: '/', // For root-relative paths
});
