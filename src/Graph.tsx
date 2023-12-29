import { motion } from 'framer-motion';
import { mapRange } from 'canvas-sketch-util/math';
import { useId } from 'react';

export const Graph = ({
  points,
  width: w = 150,
  height: h = 150,
  thickness: t = 4,
  count,
}: {
  points: number[];
  width?: number;
  height?: number;
  thickness?: number;
  count: number;
  label: string;
}) => {
  const x1 = mapRange(points[0], 0, 1, t, w - t).toFixed(3);
  const y1 = mapRange(1 - points[1], 0, 1, t, h - t).toFixed(3);
  const x2 = mapRange(points[2], 0, 1, t, w - t).toFixed(3);
  const y2 = mapRange(1 - points[3], 0, 1, t, h - t).toFixed(3);

  const path = `M ${t} ${h - t} C${x1} ${y1} ${x2} ${y2} ${w - t} ${t}`;
  const fg1 = 'var(--primary)';
  const fg2 = 'var(--secondary)';
  const circleColor = 'var(--tertiary)';
  const id = useId();

  const transition = {
    ease: points,
    duration: 1,
  };

  return (
    <svg
      className="db w-100 overflow-visible mb5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${w} ${h}`}
    >
      <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={fg1}></stop>
        <stop offset="100%" stopColor={fg2}></stop>
      </linearGradient>
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.25}
        stroke="#999"
      >
        <path d={`M 0 0 V ${h} H ${w}`} />
        {Array.from({ length: count }).map((_, idx) => (
          <path key={idx} d={`M 0 ${(h * idx) / count} H ${w}`} />
        ))}
        {Array.from({ length: count }).map((_, idx) => (
          <path key={idx} d={`M ${(w * (idx + 1)) / count} 0  V ${h}`} />
        ))}
      </g>
      <motion.path
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeWidth={t}
        fill="none"
        stroke={`url(#${id})`}
        d={path}
        initial={{ pathLength: 0, visibility: 'hidden' }}
        animate={{ pathLength: 1, visibility: 'visible' }}
        transition={transition}
      ></motion.path>
      <motion.rect
        x={-t / 2}
        y={-t / 2}
        width={t}
        height={t}
        rx={t * 0.1}
        fill={circleColor}
        style={{
          offsetPath: `path("${path}")`,
          offsetDistance: 'var(--offset)',
        }}
        // @ts-expect-error animating CSS Variable
        initial={{ '--offset': '0%' }}
        // @ts-expect-error animating CSS Variable
        animate={{ '--offset': '100%' }}
        transition={transition}
      />
    </svg>
  );
};
