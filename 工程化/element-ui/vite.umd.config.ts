import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve, dirname } from 'node:path'

// https://vite.dev/config/
const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  publicDir: 'empty',
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, './src/bundle.ts'),
      name: 'DuPlus',
      fileName: 'du-plus',
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
