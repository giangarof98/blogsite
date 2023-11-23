import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { createProxyMiddleware } from 'http-proxy-middleware'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    }
    // proxy: {
    //   '/api': createProxyMiddleware({
    //     target: 'http://localhost:8000',
    //     changeOrigin: true,
    //   })
    // }
  }
})
