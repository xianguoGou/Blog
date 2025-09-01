import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

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
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, 'src/bundle.ts'),
      name: 'DuPlus',
      fileName: 'du-plus',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        'lodash-es'
      ],
    },
  },
})
