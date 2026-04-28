import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ogPlugin from './vite-plugin-og.js'

export default defineConfig({
  plugins: [react(), ogPlugin()],
  base: '/wiki/',
  build: {
    outDir: 'dist',
  }
})
