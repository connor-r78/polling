import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '0e04-2600-8805-5c27-3400-7422-bf58-9546-c370.ngrok-free.app',  // Add your ngrok URL here
    ],
  },
})