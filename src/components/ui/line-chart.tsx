"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DataPoint {
  week: string;
  value: number;
}

interface ChartSeries {
  label: string;
  data: DataPoint[];
  color: string;
  gradientStop?: string;
}

interface LineChartProps {
  series: ChartSeries[];
  height?: number;
}

export function LineChart({ series, height = 256 }: LineChartProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const maxValue = 100;
  const minValue = 0;
  const range = maxValue - minValue;
  const padding = 40;
  const width = 800;

  // Assume all series have the same weeks
  const weeks = series[0]?.data.map((d) => d.week) || [];

  const processedSeries = useMemo(
    () =>
      series.map((s, sIdx) => ({
        ...s,
        points: s.data.map((d, i) => ({
          x: padding + (i * (width - padding * 2)) / (weeks.length - 1),
          y:
            height -
            padding -
            ((d.value - minValue) / range) * (height - padding * 2),
          value: d.value,
          week: d.week,
        })),
      })),
    [series, height, range, minValue, weeks.length],
  );

  // Helper to generate a smooth bezier curve path
  const createSmoothPath = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return "";
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpX = (prev.x + curr.x) / 2;
      d += ` C ${cpX},${prev.y} ${cpX},${curr.y} ${curr.x},${curr.y}`;
    }
    return d;
  };

  return (
    <div className="w-full group/chart relative">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="chart-reveal-clip">
            <motion.rect
              x="0"
              y="0"
              height="100%"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </clipPath>

          {processedSeries.map((s, i) => (
            <React.Fragment key={`defs-${i}`}>
              <linearGradient
                id={`areaGradient-${i}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor={s.color} stopOpacity="0.15" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0" />
              </linearGradient>
            </React.Fragment>
          ))}
          <filter id="shadow" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid Lines */}
        {[0, 25, 50, 75, 100].map((value) => {
          const y =
            height -
            padding -
            ((value - minValue) / range) * (height - padding * 2);
          return (
            <g key={value}>
              <line
                x1={padding}
                y1={y}
                x2={width - padding}
                y2={y}
                stroke="rgba(148, 163, 184, 0.05)"
                strokeWidth="1"
              />
              <text
                x={padding - 15}
                y={y + 4}
                fill="rgb(100, 116, 139)"
                fontSize="10"
                className="font-medium"
                textAnchor="end"
              >
                {value}%
              </text>
            </g>
          );
        })}

        {/* Areas and Lines */}
        <g clipPath="url(#chart-reveal-clip)">
          {processedSeries.map((s, i) => (
            <g key={`series-${i}`}>
              {/* Area */}
              <path
                d={`${createSmoothPath(s.points)} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`}
                fill={`url(#areaGradient-${i})`}
                className="transition-all duration-700"
              />
              {/* Line */}
              <motion.path
                d={createSmoothPath(s.points)}
                fill="none"
                stroke={s.color}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#shadow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </g>
          ))}
        </g>

        {/* Interaction Overlays */}
        {weeks.map((week, i) => {
          const x = padding + (i * (width - padding * 2)) / (weeks.length - 1);
          return (
            <g
              key={`interact-${i}`}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className="cursor-pointer"
            >
              <rect
                x={x - (width - padding * 2) / (weeks.length - 1) / 2}
                y={0}
                width={(width - padding * 2) / (weeks.length - 1)}
                height={height}
                fill="transparent"
              />

              {activeIdx === i && (
                <line
                  x1={x}
                  y1={padding}
                  x2={x}
                  y2={height - padding}
                  stroke="rgba(148, 163, 184, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              )}

              {/* Point highlights (Only show when hovered) */}
              {processedSeries.map((s, sIdx) => {
                const p = s.points[i];
                return (
                  <circle
                    key={`dot-${sIdx}-${i}`}
                    cx={p.x}
                    cy={p.y}
                    r={activeIdx === i ? "5" : "0"}
                    fill={s.color}
                    stroke="#020617"
                    strokeWidth="2"
                    className="transition-all duration-150"
                  />
                );
              })}

              {/* X-Axis labels */}
              <text
                x={x}
                y={height - 15}
                fill={activeIdx === i ? "#cbd5e1" : "#64748b"}
                fontSize="10"
                fontWeight={activeIdx === i ? "bold" : "normal"}
                textAnchor="middle"
                className="transition-all duration-200"
              >
                {week}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Complex Floating Tooltip */}
      {activeIdx !== null && (
        <div
          className="absolute z-50 bg-slate-900/95 border border-slate-700 p-2 rounded-lg shadow-xl pointer-events-none backdrop-blur-sm min-w-[140px]"
          style={{
            left: `${(processedSeries[0]?.points[activeIdx]?.x || 0) / 8}%`,
            top: "20px",
            transform: `translateX(${activeIdx / (weeks.length - 1) > 0.5 ? "-100%" : "0%"})`,
          }}
        >
          <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">
            {weeks[activeIdx]} Metrics
          </p>
          <div className="space-y-1.5">
            {processedSeries.map((s, i) => (
              <div key={i} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-xs text-slate-300 font-medium">
                    {s.label}
                  </span>
                </div>
                <span className="text-xs font-bold text-white">
                  {s.data[activeIdx].value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
