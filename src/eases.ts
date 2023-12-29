export default {
  easeInSine: {
    name: 'easeInSine',
    css: 'cubic-bezier(0.12, 0, 0.39, 0)',
    points: [0.12, 0, 0.39, 0],
    function: (x: number) => 1 - Math.cos((x * Math.PI) / 2),
  },
  easeOutSine: {
    name: 'easeOutSine',
    css: 'cubic-bezier(0.61, 1, 0.88, 1)',
    points: [0.61, 1, 0.88, 1],
    function: (x: number) => Math.sin((x * Math.PI) / 2),
  },
  easeInOutSine: {
    name: 'easeInOutSine',
    css: 'cubic-bezier(0.37, 0, 0.63, 1)',
    points: [0.37, 0, 0.63, 1],
    function: (x: number) => -(Math.cos(Math.PI * x) - 1) / 2,
  },
  easeInQuad: {
    name: 'easeInQuad',
    css: 'cubic-bezier(0.11, 0, 0.5, 0)',
    points: [0.11, 0, 0.5, 0],
    function: (x: number) => x * x,
  },
  easeOutQuad: {
    name: 'easeOutQuad',
    css: 'cubic-bezier(0.5, 1, 0.89, 1)',
    points: [0.5, 1, 0.89, 1],
    function: (x: number) => 1 - (1 - x) * (1 - x),
  },
  easeInOutQuad: {
    name: 'easeInOutQuad',
    css: 'cubic-bezier(0.45, 0, 0.55, 1)',
    points: [0.45, 0, 0.55, 1],
    function: (x: number) =>
      x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  },
  easeInCubic: {
    name: 'easeInCubic',
    css: 'cubic-bezier(0.32, 0, 0.67, 0)',
    points: [0.32, 0, 0.67, 0],
    function: (x: number) => x * x * x,
  },
  easeOutCubic: {
    name: 'easeOutCubic',
    css: 'cubic-bezier(0.33, 1, 0.68, 1)',
    points: [0.33, 1, 0.68, 1],
    function: (x: number) => 1 - Math.pow(1 - x, 3),
  },
  easeInOutCubic: {
    name: 'easeInOutCubic',
    css: 'cubic-bezier(0.65, 0, 0.35, 1)',
    points: [0.65, 0, 0.35, 1],
    function: (x: number) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  },
  easeInQuart: {
    name: 'easeInQuart',
    css: 'cubic-bezier(0.5, 0, 0.75, 0)',
    points: [0.5, 0, 0.75, 0],
    function: (x: number) => x * x * x * x,
  },
  easeOutQuart: {
    name: 'easeOutQuart',
    css: 'cubic-bezier(0.25, 1, 0.5, 1)',
    points: [0.25, 1, 0.5, 1],
    function: (x: number) => 1 - Math.pow(1 - x, 4),
  },
  easeInOutQuart: {
    name: 'easeInOutQuart',
    css: 'cubic-bezier(0.76, 0, 0.24, 1)',
    points: [0.76, 0, 0.24, 1],
    function: (x: number) =>
      x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  },
  easeInQuint: {
    name: 'easeInQuint',
    css: 'cubic-bezier(0.64, 0, 0.78, 0)',
    points: [0.64, 0, 0.78, 0],
    function: (x: number) => x * x * x * x * x,
  },
  easeOutQuint: {
    name: 'easeOutQuint',
    css: 'cubic-bezier(0.22, 1, 0.36, 1)',
    points: [0.22, 1, 0.36, 1],
    function: (x: number) => 1 - Math.pow(1 - x, 5),
  },
  easeInOutQuint: {
    name: 'easeInOutQuint',
    css: 'cubic-bezier(0.83, 0, 0.17, 1)',
    points: [0.83, 0, 0.17, 1],
    function: (x: number) =>
      x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  },
  easeInExpo: {
    name: 'easeInExpo',
    css: 'cubic-bezier(0.7, 0, 0.84, 0)',
    points: [0.7, 0, 0.84, 0],
    function: (x: number) => (x === 0 ? 0 : Math.pow(2, 10 * x - 10)),
  },
  easeOutExpo: {
    name: 'easeOutExpo',
    css: 'cubic-bezier(0.16, 1, 0.3, 1)',
    points: [0.16, 1, 0.3, 1],
    function: (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x)),
  },
  easeInOutExpo: {
    name: 'easeInOutExpo',
    css: 'cubic-bezier(0.87, 0, 0.13, 1)',
    points: [0.87, 0, 0.13, 1],
    function: (x: number) =>
      x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2,
  },
  easeInCirc: {
    name: 'easeInCirc',
    css: 'cubic-bezier(0.55, 0, 1, 0.45)',
    points: [0.55, 0, 1, 0.45],
    function: (x: number) => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  },
  easeOutCirc: {
    name: 'easeOutCirc',
    css: 'cubic-bezier(0, 0.55, 0.45, 1)',
    points: [0, 0.55, 0.45, 1],
    function: (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2)),
  },
  easeInOutCirc: {
    name: 'easeInOutCirc',
    css: 'cubic-bezier(0.85, 0, 0.15, 1)',
    points: [0.85, 0, 0.15, 1],
    function: (x: number) =>
      x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  },
  easeInBack: {
    name: 'easeInBack',
    css: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
    points: [0.36, 0, 0.66, -0.56],
    function: (x: number) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;

      return c3 * x * x * x - c1 * x * x;
    },
  },
  easeOutBack: {
    name: 'easeOutBack',
    css: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    points: [0.34, 1.56, 0.64, 1],
    function: (x: number) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;

      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    },
  },
  easeInOutBack: {
    name: 'easeInOutBack',
    css: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    points: [0.68, -0.6, 0.32, 1.6],
    function: (x: number) => {
      const c1 = 1.70158;
      const c2 = c1 * 1.525;

      return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
  },
};
