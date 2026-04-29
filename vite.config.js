import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        proxy: {
            '/hm/system': {
                target: 'http://localhost:9527',
                changeOrigin: true,
            },
        },
        fs: {
            allow: [
                '..',
            ],
        },
    },
});
