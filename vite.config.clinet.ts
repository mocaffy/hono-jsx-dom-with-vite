import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
    emptyOutDir: false,
    outDir: 'static/scripts/',
    lib: {
      entry: 'src/client.tsx',
      name: 'client',
      fileName: 'client'
    }
  }
})
