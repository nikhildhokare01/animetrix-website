import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The 'base' property is essential. It must match your repository name exactly.
export default defineConfig({
  plugins: [react()],
  base: '/animetrix-website/', 
})
