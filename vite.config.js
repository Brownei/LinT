import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    // rollupOptions: {
    //   input: '/path/to/main.js',
    // },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://lint-api.vercel.app',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  plugins: [react()],
})
