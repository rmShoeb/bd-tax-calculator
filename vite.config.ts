import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    server: {
        port: 3000
    },
    build: {
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash][extname]'
            }
        }
    },
    plugins: [
        {
            name: 'html-template-loader',
            transform(code, id) {
                // Only transform HTML files that are imported from TypeScript
                // Do NOT transform the root index.html
                const isRootIndex = id.endsWith('index.html') && !id.includes('src') && !id.includes('components');

                if (id.endsWith('.html') && !isRootIndex) {
                    return {
                        code: `export default ${JSON.stringify(code)}`,
                        map: null
                    };
                }
            }
        }
    ]
});