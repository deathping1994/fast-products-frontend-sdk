import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"referral-popup": resolve(__dirname, '../src/referral-popup-snippet/index.jsx')
			},
		  output: {
			entryFileNames: `referral-popup-snippet/[name].js`,
			chunkFileNames: `referral-popup-snippet/[name].js`,
			assetFileNames: `referral-popup-snippet/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
