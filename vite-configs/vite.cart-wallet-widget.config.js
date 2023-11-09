import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"cart-wallet-widget": resolve(__dirname, '../src/cart-wallet-widget/index.jsx')
			},
		  output: {
			entryFileNames: `cart-wallet-widget/[name].js`,
			chunkFileNames: `cart-wallet-widget/[name].js`,
			assetFileNames: `cart-wallet-widget/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
