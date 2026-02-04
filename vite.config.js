import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si vas a publicar en GitHub Pages en https://<user>.github.io/pruebas/
// ajusta base a "/pruebas/". Si publicas en dominio raíz o Vercel/Netlify, cámbialo a "/".
export default defineConfig({
  base: '/pruebas/',
  plugins: [react()]
})