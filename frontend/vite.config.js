import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ✅ add this

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ add this to support "@/..."
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3009', // your backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
