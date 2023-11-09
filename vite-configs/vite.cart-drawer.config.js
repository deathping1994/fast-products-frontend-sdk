import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"cart-drawer": resolve(__dirname, '../src/cart-drawer/index.jsx'),
			},
		  output: {
			entryFileNames: `cart-drawer/[name].js`,
			chunkFileNames: `cart-drawer/[name].js`,
			assetFileNames: `cart-drawer/[name].[ext]`,
			format: 'iife',
		  }
		},
		minify: false
	}
});
