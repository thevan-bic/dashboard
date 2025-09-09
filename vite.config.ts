import process from 'node:process';
import react from '@vitejs/plugin-react';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import dayjs from 'dayjs';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import { author, dependencies, devDependencies, license, name, version } from './package.json';

const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version, license, author },
    lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
};

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
    base: isDev ? '/' : '/react-antd-admin/',
    plugins: [
        tsconfigPaths(),
        react(),
        // vitePluginFakeServer({
        //     basename: '/api',
        //     enableProd: true,
        //     timeout: 1000,
        // }),
        svgrPlugin({
            svgrOptions: {
                plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
                svgoConfig: {
                    floatPrecision: 2,
                },
            },
        }),
        checker({
            typescript: true,
            terminal: false,
            enableBuild: false,
        }),
        codeInspectorPlugin({
            bundler: 'vite',
        }),
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./src/setupTests.ts'],
    },
    server: {
        port: 3333,
        proxy: {},
    },
    define: {
        __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    build: {
        outDir: 'build',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router'],
                    antd: ['antd', '@ant-design/icons'],
                    faker: ['@faker-js/faker'],
                },
            },
        },
    },
});
