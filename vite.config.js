import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/',
  // The server build only feeds scripts/prerender.mjs; copying public/ into it would duplicate every asset.
  build: { copyPublicDir: !isSsrBuild },
}))
