import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"scratch-card-snippet": resolve(__dirname, '../src/scratch-card-snippet/index.jsx'),
			},
		  output: {
			entryFileNames: `scratch-card-snippet/[name].js`,
			chunkFileNames: `scratch-card-snippet/[name].js`,
			assetFileNames: `scratch-card-snippet/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
