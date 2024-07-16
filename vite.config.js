import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    VITE_BACKEND_URL: process.env.VITE_BACKEND_URL,
  },
  server: { // comment this when use docker compose
    port: 5173, // must be a port other than 5173
    host: true,
    watch: {
      usePolling: true,
    },
  }
})
