import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			App: '/src/App',
			Pages: '/src/Pages',
			Widgets: '/src/Widgets',
			Features: '/src/Features',
			Entities: '/src/Entities',
			Shared: '/src/Shared',
		},
	},
});
