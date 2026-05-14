import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'portfolio': ['./src/pages/PortfolioPage.jsx'],
          'completed-projects': ['./src/pages/CompletedProjectsPage.jsx'],
          'vendor': ['react', 'react-dom']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false
  },
  server: {
    host: '0.0.0.0',
    port: 5182,
    strictPort: false,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '5182-i807vgtn3sfwfmd7zl32q-dec9b59d.us2.manus.computer',
      '.manus.computer'
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 5182,
    strictPort: false,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '5182-i807vgtn3sfwfmd7zl32q-dec9b59d.us2.manus.computer',
      '.manus.computer'
    ]
  }
})
