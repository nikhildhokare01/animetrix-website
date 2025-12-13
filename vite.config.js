import { defineConfig } from 'vite'  // <--- Changed 'Import' to 'import'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/animetrix-website/', 
})
