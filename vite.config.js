import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Doğrusu buydu
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})