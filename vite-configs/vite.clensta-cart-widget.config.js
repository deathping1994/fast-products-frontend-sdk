import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"clensta-wallet-widget": resolve(__dirname, '../src/clensta-cart-widget/index.jsx')
			},
		  output: {
			entryFileNames: `clensta-wallet-widget/[name].js`,
			chunkFileNames: `clensta-wallet-widget/[name].js`,
			assetFileNames: `clensta-wallet-widget/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
