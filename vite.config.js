import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { Container } from 'postcss'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
