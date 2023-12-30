import Random from 'canvas-sketch-util/random';
import { wcagContrast } from 'culori';

const root = document.documentElement;

export function setAppPalette(palette: Color[]) {
  const background = 'oklch(25% 0 0)';
  const surface = 'oklch(0 0 0)';

  const bestContrastToBg = Random.shuffle(
    palette.filter((c) => {
      return wcagContrast(c.css, background) > 4.5;
    })
  );

  const primary = bestContrastToBg.shift()!;
  const secondary = bestContrastToBg.shift()! || primary;
  const tertiary = bestContrastToBg.shift()! || secondary;

  root.style.setProperty('--background', background);
  root.style.setProperty('--surface', surface);
  root.style.setProperty('--primary', primary.css);
  root.style.setProperty('--secondary', secondary.css);
  root.style.setProperty('--tertiary', tertiary.css);
}
