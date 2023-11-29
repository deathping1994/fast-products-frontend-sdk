import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"wallet-activity-snippet": resolve(__dirname, '../src/wallet-activity-snippet/index.jsx'),
			},
		  output: {
			entryFileNames: `wallet-activity-snippet/[name].js`,
			chunkFileNames: `wallet-activity-snippet/[name].js`,
			assetFileNames: `wallet-activity-snippet/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
