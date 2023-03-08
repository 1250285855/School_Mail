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
        target: 'https://www.ideccs.com:8000',
        // vite对于proxy的封装和vuecli不一样，需要额外增加secure: false绕过https的安全验证才能请求到https的地址
        secure: false,
      },
    },
  },
  build: {
    outDir: resolve('./dist'),
    minify: false,
  },
})
