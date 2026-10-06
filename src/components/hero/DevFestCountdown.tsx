"use client";

import React, { useState, useEffect } from "react";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

// Target date: October 24, 2026 09:00:00 IST (DevFest Madurai 2026 kickoff)
const TARGET_DATE = new Date("2026-10-24T09:00:00+05:30").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const DevFestCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days, code: "D" },
    { label: "HOURS", value: timeLeft.hours, code: "H" },
    { label: "MINUTES", value: timeLeft.minutes, code: "M" },
    { label: "SECONDS", value: timeLeft.seconds, code: "S" },
  ];

  return (
    <div className="w-full bg-[#111417]/80 border-y border-[#292E33] py-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Header & Status */}
          <div className="flex items-center gap-3">
            <TechnicalLabel variant="terracotta" code="T-MINUS">
              COUNTDOWN TO BUILD
            </TechnicalLabel>
            <span className="text-xs font-mono text-[#9DA4AA] hidden sm:inline">
              MADURAI TIME // IST (UTC+05:30)
            </span>
          </div>

          {/* Number Ticker Grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full md:w-auto">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="relative bg-[#171B1F] border border-[#292E33] p-2.5 sm:p-4 text-center min-w-[70px] sm:min-w-[100px] flex flex-col items-center justify-center rounded-[2px]"
              >
                {/* Corner bracket accent */}
                <span className="absolute top-1 left-1 text-[8px] font-mono text-[#6E767E]">
                  [{block.code}]
                </span>

                <div className="text-2xl sm:text-4xl font-extrabold font-mono text-[#F5F3EE] tabular-nums tracking-tight">
                  {mounted ? String(block.value).padStart(2, "0") : "--"}
                </div>
                <div className="text-[9px] sm:text-[11px] font-mono tracking-widest text-[#B65F3C] uppercase mt-1">
                  {block.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location & Ticket Metadata */}
          <div className="hidden lg:flex flex-col text-right font-mono text-xs text-[#9DA4AA]">
            <span className="text-[#F5F3EE] font-semibold">MADURAI, TAMIL NADU</span>
            <span>EDITION 2026 // IN-PERSON</span>
          </div>
        </div>
      </div>
    </div>
  );
};
