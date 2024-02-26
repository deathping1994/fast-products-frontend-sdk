import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"spin-wheel-snippet": resolve(__dirname, '../src/spin-wheel-snippet/index.jsx'),
			},
		  output: {
			entryFileNames: `spin-wheel-snippet/[name].js`,
			chunkFileNames: `spin-wheel-snippet/[name].js`,
			assetFileNames: `spin-wheel-snippet/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
