const { defineConfig } = require('vite')
const path = require('path')

// plugin is ESM-only; dynamically import it at runtime so this config works in CJS environments
module.exports = async () => {
  const reactPlugin = (await import('@vitejs/plugin-react')).default
  return defineConfig({
    plugins: [reactPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    base: '/customer-feedback/',
    // let esbuild parse JSX in .js files from this repository during transform
    esbuild: {
      jsx: 'automatic'
    },
    // ensure dependency scanning treats .js files as JSX
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx'
        }
      }
    },
    server: {
      watch: {
        // ignore the exported `out` folder to avoid Vite scanning lots of HTML files
        ignored: ['**/out/**']
      }
    },
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html')
      }
    }
  })
}
