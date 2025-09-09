import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import { getColorPalettes } from './src/styles/theme/antd/css-variables';

export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            ...getColorPalettes,
        },
        screens: {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1600px',
        },
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { 'transform-origin': 'top' },
                    '15%': { transform: 'rotateZ(10deg)' },
                    '30%': { transform: 'rotateZ(-10deg)' },
                    '45%': { transform: 'rotateZ(5deg)' },
                    '60%': { transform: 'rotateZ(-5deg)' },
                    '75%': { transform: 'rotateZ(2deg)' },
                },
                bounceInDownOutUp: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                wiggle: 'wiggle 1s both',
                bounceInDownOutUp: 'bounceInDownOutUp 4s ease-in-out 0ms infinite',
            },
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            const languages = ['en-US'];
            for (const lang of languages) {
                addVariant(`${lang}`, `&:lang(${lang})`);
            }
        }),
    ],
} satisfies Config;
