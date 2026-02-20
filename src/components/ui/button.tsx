import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Variants
            "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white hover:shadow-lg hover:shadow-purple-500/50":
              variant === "primary",
            "bg-slate-800 text-slate-100 hover:bg-slate-700":
              variant === "default",
            "bg-transparent border border-slate-700 text-slate-100 hover:bg-slate-800":
              variant === "secondary",
            "bg-transparent hover:bg-slate-800 text-slate-100":
              variant === "ghost",
            "bg-rose-600 text-white hover:bg-rose-700": variant === "danger",
            // Sizes
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-6": size === "md",
            "h-12 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
