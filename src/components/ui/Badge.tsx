import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "red" | "yellow" | "green" | "terracotta" | "dark";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  className,
  ...props
}) => {
  const variantStyles = {
    blue: "bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/30",
    red: "bg-[#EA4335]/10 text-[#EA4335] border-[#EA4335]/30",
    yellow: "bg-[#FBBC04]/10 text-[#FBBC04] border-[#FBBC04]/30",
    green: "bg-[#34A853]/10 text-[#34A853] border-[#34A853]/30",
    terracotta: "bg-[#B65F3C]/10 text-[#B65F3C] border-[#B65F3C]/30",
    dark: "bg-[#171B1F] text-[#9DA4AA] border-[#292E33]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium border",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
