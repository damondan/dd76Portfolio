// svelte.config.js
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // GitHub Pages configuration
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    
    // Important for GitHub Pages deployment
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    },
    
    prerender: {
      handleMissingId: 'warn',
      handleHttpError: 'warn'
    }
  }
};

export default config;