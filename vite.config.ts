import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@react-three/fiber'],
  },
  resolve: {
    alias: {
      'use-sync-external-store/shim/with-selector':
        'use-sync-external-store/shim/with-selector.js',
    },
  },
  plugins: [react()],
})