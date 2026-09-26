import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiTarget = env.VITE_API_URL || 'http://localhost:5000';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      host: true, // Listen on all network interfaces (0.0.0.0) for multi-device access
      port: 5173,
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true
        },
        '/uploads': {
          target: apiTarget,
          changeOrigin: true
        }
      }
    }
  };
});
