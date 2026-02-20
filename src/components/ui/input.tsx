import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, helperText, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl bg-slate-800 px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:shadow-lg focus-visible:shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all border border-slate-700",
              label && "pt-6 pb-2",
              icon && "pl-11",
              className
            )}
            ref={ref}
            placeholder={label ? " " : props.placeholder}
            {...props}
          />
          {label && (
            <label
              className={cn(
                "absolute left-4 top-2 text-xs text-slate-400 transition-all pointer-events-none font-medium uppercase tracking-wide",
                icon && "left-11"
              )}
            >
              {label}
            </label>
          )}
        </div>
        {helperText && (
          <p className="text-xs text-slate-500 mt-1.5 ml-1">{helperText}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
