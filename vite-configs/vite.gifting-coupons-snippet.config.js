import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"gifting-coupons-snippet": resolve(__dirname, '../src/gifting-coupons-snippet/index.jsx'),
			},
		  output: {
			entryFileNames: `gifting-coupons-snippet/[name].js`,
			chunkFileNames: `gifting-coupons-snippet/[name].js`,
			assetFileNames: `gifting-coupons-snippet/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
