import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      overlay: true,  // Ensure overlay for errors is enabled
    },
    watch: {
      usePolling: true,  // Enable polling if filesystem events are not detected
    },
  },
})
