import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
  },
})
