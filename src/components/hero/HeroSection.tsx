"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, Sparkles, Terminal, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { DigitalGopuram } from "./DigitalGopuram";
import { DevFestCountdown } from "./DevFestCountdown";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden bg-[#0B0D0F]">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 bg-gopuram-grid bg-[size:3rem_3rem] opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Viewport Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Context Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <TechnicalLabel variant="terracotta" code="CHAPTER 01">
                ROOTS & REVOLUTION
              </TechnicalLabel>
              <TechnicalLabel variant="blue" dot={false}>
                GDG MADURAI
              </TechnicalLabel>
            </div>

            {/* Giant Architectural Headline */}
            <div className="flex flex-col mb-6">
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#9DA4AA] mb-1">
                FLAGSHIP ANNUAL DEVELOPER FESTIVAL
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-[#F5F3EE] uppercase leading-[0.95]">
                DEVFEST <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B65F3C] via-[#FBBC04] to-[#4285F4]">
                  MADURAI
                </span>{" "}
                <br />
                <span className="text-white">2026</span>
              </h1>
            </div>

            {/* Central Creative Theme */}
            <div className="border-l-2 border-[#B65F3C] pl-4 mb-8">
              <div className="text-lg sm:text-2xl font-bold font-display uppercase tracking-wide text-[#F5F3EE]">
                BUILD FROM MADURAI.
              </div>
              <p className="mt-2 text-sm sm:text-base text-[#9DA4AA] font-sans max-w-xl leading-relaxed">
                A developer festival where local community, deep architectural roots,
                cutting-edge technology and global ideas meet the future.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="#register">
                <Button variant="terracotta" size="lg" withArrow>
                  Register Now
                </Button>
              </Link>
              <Link href="#why-devfest">
                <Button variant="secondary" size="lg">
                  Explore Event
                </Button>
              </Link>
            </div>

            {/* Verified Placeholders / Bottom Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#292E33] w-full max-w-xl">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#9DA4AA]">
                  <Calendar className="w-3.5 h-3.5 text-[#B65F3C]" />
                  <span>DATE</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#F5F3EE] font-semibold mt-1">
                  OCTOBER 2026
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#9DA4AA]">
                  <MapPin className="w-3.5 h-3.5 text-[#4285F4]" />
                  <span>VENUE</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#F5F3EE] font-semibold mt-1">
                  [VENUE, MADURAI]
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#9DA4AA]">
                  <Terminal className="w-3.5 h-3.5 text-[#34A853]" />
                  <span>EXPERIENCE</span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#F5F3EE] font-semibold mt-1">
                  MULTI-TRACK × LAB
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Gopuram Artwork (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <DigitalGopuram />
          </div>
        </div>
      </div>

      {/* Countdown Bar pinned at bottom of Hero */}
      <DevFestCountdown />
    </section>
  );
};
