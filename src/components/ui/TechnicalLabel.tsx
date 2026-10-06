import React from "react";
import { cn } from "@/lib/utils";

interface TechnicalLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "terracotta" | "blue" | "green" | "yellow" | "red";
  size?: "sm" | "md";
  code?: string;
  dot?: boolean;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({
  children,
  variant = "default",
  size = "md",
  code,
  dot = true,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };
  const variantStyles = {
    default: "border-[#292E33] text-[#9DA4AA] bg-[#111417]/80",
    terracotta: "border-[#B65F3C]/40 text-[#B65F3C] bg-[#B65F3C]/10",
    blue: "border-[#4285F4]/40 text-[#4285F4] bg-[#4285F4]/10",
    green: "border-[#34A853]/40 text-[#34A853] bg-[#34A853]/10",
    yellow: "border-[#FBBC04]/40 text-[#FBBC04] bg-[#FBBC04]/10",
    red: "border-[#EA4335]/40 text-[#EA4335] bg-[#EA4335]/10",
  };

  const dotColors = {
    default: "bg-[#9DA4AA]",
    terracotta: "bg-[#B65F3C]",
    blue: "bg-[#4285F4]",
    green: "bg-[#34A853]",
    yellow: "bg-[#FBBC04]",
    red: "bg-[#EA4335]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 tracking-wider uppercase font-mono border rounded-[2px] transition-colors select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {code && <span className="opacity-60 font-semibold">{code}</span>}
      <span className="font-medium tracking-widest">{children}</span>
    </span>
  );
};
