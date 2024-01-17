import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"loyalty-popup": resolve(__dirname, '../src/loyalty-popup/index.jsx')
			},
		  output: {
			entryFileNames: `loyalty-popup/[name].js`,
			chunkFileNames: `loyalty-popup/[name].js`,
			assetFileNames: `loyalty-popup/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
