import {
    colorPaletteNumbers,
    colors,
    neutralColorPalettes,
    neutralColors,
    productLevelColorSystem,
} from '../../../components/antd-app/constants';
import { hexToRGB } from '../../../components/antd-app/utils';

function createColorPalettes() {
    const colorPaletteVar: Record<string, string> = {
        transparent: 'transparent',
        inherit: 'inherit',
        current: 'currentColor',
        white: 'rgb(255 255 255)',
        black: 'rgb(0 0 0)',
    };

    colors.forEach((color) => {
        colorPaletteNumbers.forEach((number, index) => {
            const colorCount = index === 0 ? '' : `-${index}`;
            colorPaletteVar[`${color}-${number}`] = `rgb(var(--oo-${color}${colorCount}))`;
        });
    });

    colorPaletteNumbers.forEach((number, index) => {
        const rgb = hexToRGB(neutralColorPalettes[index]);
        colorPaletteVar[`gray-${number}`] = `rgb(${rgb})`;
    });

    productLevelColorSystem.forEach((key) => {
        const keyName = key.replace('color', '');
        const camelCaseName = keyName.charAt(0).toLowerCase() + keyName.slice(1);
        colorPaletteVar[camelCaseName] = `rgb(var(--oo-${key}))`;
    });

    neutralColors.forEach((key) => {
        colorPaletteVar[key] = `var(--oo-${key})`;
    });

    return colorPaletteVar;
}

export const getColorPalettes = createColorPalettes();
