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
      '@js': resolve(__dirname, 'src/assets/js'),
      '@video': resolve(__dirname, 'src/assets/video')
    },
  },
  base: '',
  server: {
    port: 3000,
    open: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://ideccs.com:8000',
      },
    },
  },
  build: {
    outDir: resolve('./dist'),
    minify: false,
  },
})
