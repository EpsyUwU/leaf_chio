import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import pkg from '@esbuild-plugins/node-globals-polyfill'
const nodeGlobalsPolyfill = pkg.default


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@polkadot/x-window']
    }
  },
  plugins: [
    react(),
    nodeGlobalsPolyfill(),
  ],
  resolve: {
    alias: {
    }
  },
  define: {
    'global': 'window',
    'process.env': '({})', 
    // Define aquí otros globals si es necesario, pero ten cuidado de no sobredefinir
  },
  base: 'https://EpsyUwU.github.io/leaf_chio',
})
