import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/fonts': {
        target: 'https://static.allen.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fonts/, ''), // Remove '/fonts' from the request path
      }
    }
  }
})