/// <reference types="vite/client" />

declare module 'canvas-sketch-util/random';
declare module 'canvas-sketch-util/math';

interface Color {
  channels: {
    h: number;
    s: number;
    l: number;
  };
  css: string;
  printValue: string;
  contrast: {
    white: number;
    black: number;
  };
}

interface Ease {
  name: EaseType;
  css: string;
  points: Vector3[];
  function: (x: number) => number;
}

interface Hue {
  hStart: number;
  hStartCenter: number;
  hEasing: Ease;
  hCycles: number;
  hHarmony: {
    name: colorHarmony;
    hueList?: number[];
  };
}

interface Saturation {
  sRange: [number, number];
  sEasing: Ease;
}

interface Lightness {
  lRange: [number, number];
  lEasing: Ease;
}
