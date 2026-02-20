"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  className?: string;
  duration?: number;
}

export function AnimatedNumber({
  value,
  className,
  duration = 1.5,
}: AnimatedNumberProps): React.JSX.Element {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [value, count, duration]);

  return <motion.span className={className}>{rounded}</motion.span>;
}
