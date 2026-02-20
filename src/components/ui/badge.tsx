import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset",
          {
            "bg-slate-800 text-slate-300 ring-slate-700": variant === "default",
            "bg-emerald-900/30 text-emerald-400 ring-emerald-700":
              variant === "success",
            "bg-amber-900/30 text-amber-400 ring-amber-700":
              variant === "warning",
            "bg-rose-900/30 text-rose-400 ring-rose-700": variant === "error",
            "bg-cyan-900/30 text-cyan-400 ring-cyan-700": variant === "info",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
