import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"cart-wallet-strip": resolve(__dirname, '../src/cart-wallet-strip/index.jsx')
			},
		  output: {
			entryFileNames: `cart-wallet-strip/[name].js`,
			chunkFileNames: `cart-wallet-strip/[name].js`,
			assetFileNames: `cart-wallet-strip/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
