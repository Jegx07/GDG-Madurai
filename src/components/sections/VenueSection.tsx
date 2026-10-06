"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";
import { MapPin, Navigation, Car, Bus, Train, ArrowUpRight } from "lucide-react";

export const VenueSection: React.FC = () => {
  return (
    <Section
      id="venue"
      chapter="CHAPTER 10"
      number="10.0"
      title="FIND YOUR WAY TO DEVFEST"
      subtitle="Assemble in the cultural and technical heart of Southern Tamil Nadu. Complete navigation, transport links, and digital routing."
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Digital Route Map (Visual: Madurai geometry + route lines + nodes + Vaigai flow) (7 Cols) */}
          <div className="lg:col-span-7 bg-[#07080A] border border-[#292E33] p-6 sm:p-8 rounded-[2px] relative overflow-hidden min-h-[420px] flex flex-col justify-between">
            {/* Architectural Grid overlay */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#9DA4AA_1px,transparent_1px)] bg-[size:20px_20px]"
              aria-hidden="true"
            />

            {/* Header info bar */}
            <div className="flex items-center justify-between z-10 border-b border-[#292E33] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                <span className="text-xs font-mono text-[#F5F3EE] font-semibold">
                  DIGITAL ROUTE MAP // MADURAI
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#9DA4AA]">
                GRID: 9.9252° N, 78.1198° E
              </span>
            </div>

            {/* Custom Procedural SVG Route Map */}
            <div className="my-6 relative z-10 w-full h-[260px] flex items-center justify-center">
              <svg viewBox="0 0 500 260" className="w-full h-full fill-none" strokeLinecap="round">
                {/* Vaigai River Curve (Dividing North & South Madurai) */}
                <path
                  d="M10 130 C120 110, 200 160, 300 130 C400 100, 450 140, 490 120"
                  stroke="#4285F4"
                  strokeWidth="6"
                  opacity="0.25"
                />
                <path
                  d="M10 130 C120 110, 200 160, 300 130 C400 100, 450 140, 490 120"
                  stroke="#4285F4"
                  strokeWidth="1.5"
                  strokeDasharray="8 4"
                  opacity="0.8"
                />
                <text x="30" y="115" fill="#4285F4" fontSize="9" fontFamily="monospace">
                  VAIGAI RIVER CORRIDOR
                </text>

                {/* Madurai Concentric Ring Roads (Veli Streets) */}
                <circle cx="250" cy="130" r="95" stroke="#292E33" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="250" cy="130" r="60" stroke="#292E33" strokeWidth="1" />
                <circle cx="250" cy="130" r="30" stroke="#B65F3C" strokeWidth="1.5" opacity="0.6" />

                {/* Central Gopuram Historic Landmark Node */}
                <polygon points="250,118 258,135 242,135" stroke="#FBBC04" strokeWidth="1.5" fill="rgba(251,188,4,0.1)" />
                <text x="265" y="133" fill="#FBBC04" fontSize="8" fontFamily="monospace">
                  MEENAKSHI CORE
                </text>

                {/* DevFest Venue Node */}
                <g className="cursor-pointer">
                  <line x1="250" y1="130" x2="360" y2="70" stroke="#34A853" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="360" cy="70" r="14" stroke="#34A853" strokeWidth="2" fill="#111417" />
                  <circle cx="360" cy="70" r="5" fill="#34A853" className="animate-ping" />
                  <circle cx="360" cy="70" r="5" fill="#34A853" />
                  <text x="310" y="48" fill="#F5F3EE" fontSize="10" fontWeight="bold" fontFamily="monospace">
                    [VENUE // DEVFEST 2026]
                  </text>
                  <text x="310" y="58" fill="#9DA4AA" fontSize="8" fontFamily="monospace">
                    MADURAI AUDITORIUM
                  </text>
                </g>

                {/* Madurai Junction Station Transit Node */}
                <g>
                  <circle cx="150" cy="170" r="6" stroke="#4285F4" strokeWidth="1.5" fill="#111417" />
                  <text x="80" y="195" fill="#9DA4AA" fontSize="8" fontFamily="monospace">
                    MADURAI JUNCTION (MDU)
                  </text>
                  <line x1="150" y1="170" x2="250" y2="130" stroke="#292E33" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                {/* Madurai Airport Node (IXM) */}
                <g>
                  <circle cx="340" cy="220" r="6" stroke="#EA4335" strokeWidth="1.5" fill="#111417" />
                  <text x="280" y="242" fill="#9DA4AA" fontSize="8" fontFamily="monospace">
                    MADURAI AIRPORT (IXM)
                  </text>
                  <line x1="340" y1="220" x2="360" y2="70" stroke="#292E33" strokeWidth="1" strokeDasharray="4 4" />
                </g>
              </svg>
            </div>

            {/* Bottom Wayfinding Legend */}
            <div className="pt-3 border-t border-[#292E33] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#9DA4AA]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#34A853]" /> VENUE
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#4285F4]" /> TRANSIT (MDU)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#FBBC04]" /> CORE
                </span>
              </div>
              <span className="text-[#B65F3C]">ACTIVE GPS TRACKING</span>
            </div>
          </div>

          {/* Right: Venue Information & Logistics (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <TechnicalLabel variant="terracotta" code="VENUE DOSSIER">
                  LOCATION & ACCESSIBILITY
                </TechnicalLabel>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mt-2 mb-1">
                  [VENUE, MADURAI]
                </h3>
                <p className="text-sm font-mono text-[#9DA4AA]">
                  [CONVENTION HALL // ADDRESS DETAILS WILL BE POSTED UPON CFP LOCK]
                </p>
              </div>

              {/* Transit & Logistics Cards */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 bg-[#111417] border border-[#292E33] rounded-[2px] flex items-start gap-3">
                  <Train className="w-4 h-4 text-[#4285F4] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F5F3EE] font-bold">RAILWAY TRANSIT</div>
                    <div className="text-[#9DA4AA] text-[11px] mt-0.5">
                      Direct connectivity from Madurai Junction (MDU). 15-20 minutes via cab/auto.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-[#111417] border border-[#292E33] rounded-[2px] flex items-start gap-3">
                  <Bus className="w-4 h-4 text-[#FBBC04] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F5F3EE] font-bold">BUS & CITY TRANSIT</div>
                    <div className="text-[#9DA4AA] text-[11px] mt-0.5">
                      Frequent arterial transit from Mattuthavani (Integrated) & Periyar Bus Terminus.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-[#111417] border border-[#292E33] rounded-[2px] flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#34A853] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#F5F3EE] font-bold">PARKING & ENTRY</div>
                    <div className="text-[#9DA4AA] text-[11px] mt-0.5">
                      Dedicated on-premise two-wheeler and four-wheeler parking for ticketed attendees.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-[#292E33] flex flex-wrap items-center gap-4 mt-6">
              <Link href="/venue">
                <Button variant="secondary" size="md" withArrow>
                  Full Travel Guide
                </Button>
              </Link>
              <a
                href="https://maps.google.com/?q=Madurai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md">
                  <Navigation className="w-3.5 h-3.5 mr-1" /> Open Maps
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
