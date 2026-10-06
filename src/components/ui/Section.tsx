import React from "react";
import { cn } from "@/lib/utils";
import { TechnicalLabel } from "./TechnicalLabel";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  chapter?: string;
  number?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "default" | "surface" | "accent";
}

export const Section: React.FC<SectionProps> = ({
  id,
  chapter,
  number,
  title,
  subtitle,
  align = "left",
  variant = "default",
  children,
  className,
  ...props
}) => {
  const variantBg = {
    default: "bg-[#0B0D0F]",
    surface: "bg-[#111417]",
    accent: "bg-[#171B1F]",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-20 lg:py-28 border-t border-[#292E33]/60 transition-colors",
        variantBg[variant],
        className
      )}
      {...props}
    >
      {(chapter || number || title || subtitle) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
          <div
            className={cn(
              "flex flex-col gap-3",
              align === "center" ? "items-center text-center" : "items-start text-left"
            )}
          >
            <div className="flex items-center gap-3">
              {chapter && (
                <TechnicalLabel variant="terracotta" code={number}>
                  {chapter}
                </TechnicalLabel>
              )}
            </div>

            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EE] uppercase font-display">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="max-w-2xl text-base sm:text-lg text-[#9DA4AA] font-sans">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {children}
    </section>
  );
};
