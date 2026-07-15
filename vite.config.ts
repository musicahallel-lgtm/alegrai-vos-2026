import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativo no build (funciona no GitHub Pages em subcaminho e em qualquer host);
// base '/' no dev pra o servidor local funcionar normal.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  plugins: [react()],
  server: {
    port: 5170,
    host: true,
  },
}))
