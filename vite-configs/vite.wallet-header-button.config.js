import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"wallet-header-button": resolve(__dirname, '../src/wallet-header-button/index.jsx'),
			},
		  output: {
			entryFileNames: `wallet-header-button/[name].js`,
			chunkFileNames: `wallet-header-button/[name].js`,
			assetFileNames: `wallet-header-button/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
