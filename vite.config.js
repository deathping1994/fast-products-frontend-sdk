import { defineConfig } from 'vite';
import { resolve } from 'path'
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		rollupOptions: {
		  input: {
			"cart-wallet-widget": resolve(__dirname, 'src/cart-wallet-widget/index.jsx'),
			// "second-script": resolve(__dirname, 'src/second-script/index.jsx'),
			},
		  output: {
			entryFileNames: `scripts/[name].js`,
			chunkFileNames: `scripts/[name].js`,
			assetFileNames: `scripts/[name].[ext]`
		  }
		}
	}
});
