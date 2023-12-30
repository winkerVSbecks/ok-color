import Random from 'canvas-sketch-util/random';
import { filterBrightness, formatCss, wcagContrast } from 'culori';

const root = document.documentElement;

export function setAppPalette(palette: Color[]) {
  const background = 'oklch(25% 0 0)';
  const surface = 'oklch(0 0 0)';

  const bestContrastToBg = Random.shuffle(
    palette.filter((c) => {
      return wcagContrast(c.css, background) > 4.5;
    })
  );

  const fallbackPrimary = formatCss(
    filterBrightness(1.25, 'oklch')(palette.at(-1)!.css)
  )!;

  const primary =
    bestContrastToBg.length < 3
      ? fallbackPrimary
      : bestContrastToBg.shift()!.css;
  const secondary =
    bestContrastToBg.length < 3
      ? fallbackPrimary
      : bestContrastToBg.shift()!.css;
  const tertiary =
    bestContrastToBg.length < 3
      ? fallbackPrimary
      : bestContrastToBg.shift()!.css;

  root.style.setProperty('--background', background);
  root.style.setProperty('--surface', surface);
  root.style.setProperty('--primary', primary);
  root.style.setProperty('--secondary', secondary);
  root.style.setProperty('--tertiary', tertiary);
}
