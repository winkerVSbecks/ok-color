import { colorHarmony } from 'rampensau';

const colorHarmonyVisualization = {
  complementary: [4, 10],
  analogous: [4, 5, 6],
  triadic: [4, 8, 0],
  tetradic: [4, 7, 1, 10],
  splitComplementary: [10, 3, 5],
};

export const ColorWheel = ({
  mode = 'splitComplementary',
}: {
  mode: colorHarmony;
}) => {
  return (
    <svg viewBox="0 0 100 100" className="db w-100">
      <g transform="rotate(45 50 50)">
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#FCFE07"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(0) ? 32 : 24}
          transform="rotate(-90 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#FC8F09"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(1) ? 32 : 24}
          transform="rotate(-60 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#FC5B09"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(2) ? 32 : 24}
          transform="rotate(-30 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#FC2C08"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(3) ? 32 : 24}
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#C60609"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(4) ? 32 : 24}
          transform="rotate(30 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#910659"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(5) ? 32 : 24}
          transform="rotate(60 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#59065A"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(6) ? 32 : 24}
          transform="rotate(90 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#080658"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(7) ? 32 : 24}
          transform="rotate(120 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#0D3290"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(8) ? 32 : 24}
          transform="rotate(150 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#085B5A"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(9) ? 32 : 24}
          transform="rotate(180 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#2F8D0B"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(10) ? 32 : 24}
          transform="rotate(210 50 50)"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#58C800"
          strokeDasharray="15.7 188.5"
          strokeWidth={colorHarmonyVisualization[mode].includes(11) ? 32 : 24}
          transform="rotate(240 50 50)"
        ></circle>
      </g>
    </svg>
  );
};
