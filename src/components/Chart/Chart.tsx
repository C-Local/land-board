import styles from "./Chart.module.css";

type ChartProps = {
  label: string;
  labels: string[];
  maxY: number;
  yTicks: { value: number; label: string }[];
  lines: { color: string; values: number[] }[];
};

export default function Chart({
  label,
  labels,
  maxY,
  yTicks,
  lines,
}: ChartProps) {
  const width = 540;
  const height = 190;
  const padLeft = 46;
  const padRight = 10;
  const padTop = 10;
  const padBottom = 26;
  const plotWidth = width - padLeft - padRight;
  const plotHeight = height - padTop - padBottom;

  const getX = (index: number) =>
    padLeft + (index / (labels.length - 1)) * plotWidth;

  const getY = (value: number) =>
    padTop + plotHeight - (value / maxY) * plotHeight;

  return (
    <svg
      className={styles.chart}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={label}
    >
      {yTicks.map((tick) => (
        <g key={tick.label}>
          <line
            className={styles.grid}
            x1={padLeft}
            y1={getY(tick.value)}
            x2={width - padRight}
            y2={getY(tick.value)}
          />
          <text
            className={styles.label}
            x={padLeft - 10}
            y={getY(tick.value)}
            textAnchor="end"
            dominantBaseline="middle"
          >
            {tick.label}
          </text>
        </g>
      ))}

      <line
        className={styles.axis}
        x1={padLeft}
        y1={padTop}
        x2={padLeft}
        y2={padTop + plotHeight}
      />

      {labels.map((label, index) => (
        <text
          key={label}
          className={styles.label}
          x={getX(index)}
          y={height - 8}
          textAnchor="middle"
        >
          {label}
        </text>
      ))}

      {lines.map((line) => (
        <g key={line.color}>
          <polyline
            fill="none"
            stroke={line.color}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            points={line.values
              .map((value, index) => `${getX(index)},${getY(value)}`)
              .join(" ")}
          />
          {line.values.map((value, index) => (
            <circle
              key={index}
              cx={getX(index)}
              cy={getY(value)}
              r={3.5}
              fill={line.color}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
