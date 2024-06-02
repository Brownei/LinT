import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://lint-api.vercel.app',
        changeOrigin: true,
      },
    },
    cors: {
      preflightContinue: true,
      methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT'],
      credentials: true
    }
  },
  plugins: [react()],
})
