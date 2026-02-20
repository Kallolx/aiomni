"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CircularProgressProps {
  value: number;
  maxValue?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  valueClassName?: string;
  showValue?: boolean;
  showMax?: boolean;
  variant?: "success" | "warning" | "error" | "default";
}

export function CircularProgress({
  value,
  maxValue = 100,
  size = 120,
  strokeWidth = 10,
  className,
  valueClassName,
  showValue = true,
  showMax = false,
  variant = "default",
}: CircularProgressProps): React.JSX.Element {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (value / maxValue) * 100;
  const offset = circumference - (percentage / 100) * circumference;

  // Determine color based on variant
  const getColor = () => {
    if (variant === "success") return "#10b981"; // emerald
    if (variant === "warning") return "#f59e0b"; // amber
    if (variant === "error") return "#f43f5e"; // rose
    // Default gradient
    return percentage >= 75
      ? "#10b981"
      : percentage >= 50
        ? "#f59e0b"
        : "#f43f5e";
  };

  // Animate the numeric value counting up from 0 to 'value'
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [value, count]);

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
      {...(!className?.includes("w-") && !className?.includes("h-")
        ? { style: { width: size, height: size } }
        : {})}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(148, 163, 184, 0.1)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor()}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className={cn("text-3xl font-semibold", valueClassName)}>
            {rounded}
          </motion.span>
          {showMax && (
            <span className="text-xs text-slate-400">/ {maxValue}</span>
          )}
        </div>
      )}
    </div>
  );
}
