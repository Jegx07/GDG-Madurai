"use client";

import React, { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "terracotta" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", withArrow = false, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs font-mono tracking-wider",
      md: "px-5 py-2.5 text-sm font-mono tracking-wider",
      lg: "px-7 py-3.5 text-base font-mono tracking-wider",
    };

    const variantClasses = {
      primary:
        "bg-[#4285F4] text-white hover:bg-[#3367D6] shadow-[0_0_20px_rgba(66,133,244,0.3)] active:translate-y-0.5",
      terracotta:
        "bg-[#B65F3C] text-white hover:bg-[#A35232] shadow-[0_0_20px_rgba(182,95,60,0.35)] active:translate-y-0.5",
      secondary:
        "bg-[#171B1F] text-[#F5F3EE] border border-[#292E33] hover:border-[#4285F4] hover:bg-[#1E2328] active:translate-y-0.5",
      outline:
        "bg-transparent text-[#F5F3EE] border border-[#292E33] hover:border-[#B65F3C] hover:text-[#B65F3C] active:translate-y-0.5",
      ghost:
        "bg-transparent text-[#9DA4AA] hover:text-[#F5F3EE] hover:bg-[#171B1F]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 uppercase font-medium transition-all duration-200 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D0F]",
          "border border-transparent rounded-[2px]",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {/* Subtle Gopuram corner accents for primary & terracotta variants */}
        {(variant === "primary" || variant === "terracotta") && (
          <>
            <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t-2 border-l-2 border-white/60 pointer-events-none" />
            <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b-2 border-r-2 border-white/60 pointer-events-none" />
          </>
        )}
        <span className="relative z-10">{children}</span>
        {withArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
