import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"referral-ui-snippet": resolve(__dirname, '../src/referral-ui-snippet/index.jsx'),
			},
		  output: {
			entryFileNames: `referral-ui-snippet/[name].js`,
			chunkFileNames: `referral-ui-snippet/[name].js`,
			assetFileNames: `referral-ui-snippet/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
