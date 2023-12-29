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
  name: string;
  css: string;
  points: Vector3[];
  function: (x: number) => number;
}
