import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            tailwindcss(),
            viteStaticCopy({
              targets: [
                {
                  src: 'public/404.html',
                  dest: '.' // Copie à la racine de dist/
                }
              ]
            })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:44345/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: '/mymizara/'
})
