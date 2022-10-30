import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@img': resolve(__dirname, 'src/assets/imgs'),
      '@css': resolve(__dirname, 'src/assets/css'),
      '@icons': resolve(__dirname, 'src/assets/icons'),
    },
  },
  base: '',
  server: {
    port: 3000,
    open: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
      },
    },
  },
  build: {
    outDir: resolve('./dist'),
    minify: false,
  },
})
