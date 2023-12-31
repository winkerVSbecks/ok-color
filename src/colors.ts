import {
  generateColorRamp,
  GenerateColorRampArgument,
  Vector3,
} from 'rampensau';
import { filterInvert, formatCss, wcagContrast, oklch } from 'culori';

export function colorScheme(params?: GenerateColorRampArgument): Color[] {
  const colors = generateColorRamp(params).map((hsl) => {
    const css = formatCss(
      oklch({ mode: 'hsl', h: hsl[0], s: hsl[1], l: hsl[2] })
    );

    return {
      channels: {
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
      },
      css,
      printValue: `${Math.floor(hsl[0])}° ${Math.floor(
        hsl[1] * 100
      )}% ${Math.floor(hsl[2] * 100)}%`,
      contrast: {
        white: wcagContrast('#fff', css),
        black: wcagContrast('#000', css),
      },
    };
  });

  return colors;
}

export function convertToCSS(colors: Vector3[]) {
  return colors.map((color) => colorToCSS(color, 'oklch'));
}

export function generativeMode(colors: string[]) {
  const background = colors.pop()!; //Random.pick(colors);
  // Filter out colors that don't have enough contrast with the background
  const foreground = colors.filter((c: string) => {
    return wcagContrast(background, c) > 1.25;
  });
  return { background, foreground };
}

export function invertColor(color: string) {
  return formatCss(filterInvert(1)(color));
}

export function debugPalette(colors: string[]) {
  colors.forEach((c) => {
    console.log(`%c ${c}`, `background: ${c}; color: ${invertColor(c)}`);
  });
}

/**
 * functions to convert from the ramp's colors values to CSS color functions.
 */
const colorModsCSS = {
  oklch: (color: Vector3) => [
    color[2] * 100 + '%',
    color[1] * 100 + '%',
    color[0],
  ],
  lch: (color: Vector3) => [
    color[2] * 100 + '%',
    color[1] * 100 + '%',
    color[0],
  ],
  hsl: (color: Vector3) => [
    color[0],
    color[1] * 100 + '%',
    color[2] * 100 + '%',
  ],
};

export type colorToCSSxLCHMode = 'oklch' | 'lch' | 'hsl';
/**
 * Converts Hxx (Hue, Chroma, Lightness) values to a CSS `oklch()` color function string.
 *
 * @param {Object} hxx - An object with hue, chroma, and lightness properties.
 * @param {number} hxx.hue - The hue value.
 * @param {number} hxx.chroma - The chroma value.
 * @param {number} hxx.lightness - The lightness value.
 * @returns {string} - The CSS color function string in the format `oklch(lightness% chroma hue)`.
 */
export const colorToCSS = (
  color: Vector3,
  mode: colorToCSSxLCHMode = 'oklch'
): string => `${mode}(${colorModsCSS[mode](color).join(' ')})`;
