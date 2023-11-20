import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn'
		},
        // Uncomment next lines for gh-pages deploy.
        /*
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/<your-project-on-github>' : '',
		},
		*/
	}
};

export default config;

