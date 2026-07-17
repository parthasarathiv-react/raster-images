import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // NOTE: deliberately no manualChunks here.
    //
    // Forcing a 'three' vendor chunk backfired badly: Rollup put Vite's shared
    // __vite_preload helper into it, so every code-split page chunk had to
    // statically `import { _ } from "./three-*.js"` just to get that helper.
    // three.js then became a static dep of the entry (modulepreloaded at 32ms)
    // and shipped 278KB to pages like Downloads that render no WebGL at all —
    // the exact cost the splitting was meant to remove.
    //
    // Rollup's automatic splitting already gives each route its own chunk and
    // hoists three.js into a shared async chunk reachable only from the lazy
    // 3D components, which is what we want. Verify with:
    //   grep modulepreload dist/index.html   # three must NOT appear
    chunkSizeWarningLimit: 700,
  },
})
