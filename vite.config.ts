import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mpeg', '**/*.mp3'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? assetInfo.name ?? '';
          if (name.includes('drlakes_audio')) {
            return 'assets/drlakes_audio.mpeg';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
})
