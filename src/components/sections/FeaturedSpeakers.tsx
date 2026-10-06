"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Github, Twitter, Linkedin, Sparkles } from "lucide-react";

interface Speaker {
  id: string;
  code: string;
  name: string;
  role: string;
  organization: string;
  track: string;
  sessionTitle: string;
  accent: "blue" | "red" | "yellow" | "green" | "terracotta";
  isKeynote?: boolean;
}

const SPEAKERS: Speaker[] = [
  {
    id: "sp-1",
    code: "KEYNOTE // 01",
    name: "[SPEAKER_NAME // GDE AI]",
    role: "Google Developer Expert in Machine Learning",
    organization: "[ORGANIZATION]",
    track: "ARTIFICIAL INTELLIGENCE",
    sessionTitle: "Multimodal Gemini Architectures & Autonomous Agents",
    accent: "red",
    isKeynote: true,
  },
  {
    id: "sp-2",
    code: "CLOUD // 02",
    name: "[SPEAKER_NAME // CLOUD ARCHITECT]",
    role: "Staff Cloud Infrastructure Engineer",
    organization: "[ENTERPRISE_ORG]",
    track: "GOOGLE CLOUD",
    sessionTitle: "Zero-Downtime Distributed GKE Workloads at Scale",
    accent: "blue",
  },
  {
    id: "sp-3",
    code: "ANDROID // 03",
    name: "[SPEAKER_NAME // ANDROID LEAD]",
    role: "Principal Mobile Architect",
    organization: "[TECH_STUDIO]",
    track: "ANDROID ECOSYSTEM",
    sessionTitle: "Modern Declarative UI with Jetpack Compose & KMP",
    accent: "green",
  },
  {
    id: "sp-4",
    code: "WEB // 04",
    name: "[SPEAKER_NAME // CHROME DEV]",
    role: "Web Platform Performance Engineer",
    organization: "[OPEN_SOURCE_FOUNDATION]",
    track: "MODERN WEB",
    sessionTitle: "High-Performance Edge Rendering and Wasm Kernels",
    accent: "yellow",
  },
  {
    id: "sp-5",
    code: "FLUTTER // 05",
    name: "[SPEAKER_NAME // FLUTTER SPECIALIST]",
    role: "Lead Mobile Specialist",
    organization: "[PRODUCT_STUDIO]",
    track: "FLUTTER & DART",
    sessionTitle: "Hardware-Accelerated 60fps UIs with Impeller Engine",
    accent: "terracotta",
  },
];

export const FeaturedSpeakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const keynote = SPEAKERS[0];
  const railSpeakers = SPEAKERS.slice(1);

  return (
    <Section
      id="speakers"
      chapter="CHAPTER 05"
      number="05.0"
      title="VOICES OF THE REVOLUTION"
      subtitle="Google Developer Experts, open-source maintainers, and systems architects sharing production-grade lessons."
      variant="surface"
    >
      <Container size="wide">
        {/* Verified Speaker Notice Banner */}
        <div className="mb-8 p-3 bg-[#0B0D0F] border border-[#292E33] rounded-[2px] flex items-center justify-between text-xs font-mono text-[#9DA4AA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FBBC04]" />
            <span>OFFICIAL CALL FOR SPEAKERS (CFP) ACTIVE // LINEUP FINALIZING</span>
          </div>
          <Link href="/speakers" className="text-[#B65F3C] hover:underline hidden sm:inline">
            VIEW CFP GUIDELINES →
          </Link>
        </div>

        {/* Featured Keynote Spotlight Box */}
        <div className="mb-12 border border-[#292E33] bg-[#0B0D0F] p-6 sm:p-10 rounded-[2px] relative overflow-hidden">
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#EA4335]" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#EA4335]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Geometric Avatar Silhouette (4 Cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 border border-[#292E33] bg-[#111417] flex items-center justify-center p-4">
                {/* Abstract Gopuram / Developer Silhouette SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full stroke-[#EA4335]/60 fill-none"
                  strokeWidth="1.2"
                >
                  <circle cx="50" cy="35" r="18" stroke="#4285F4" />
                  <path d="M20 85 C20 60, 80 60, 80 85" stroke="#B65F3C" />
                  <polygon points="50,10 60,25 40,25" stroke="#FBBC04" />
                  <line x1="10" y1="90" x2="90" y2="90" stroke="#292E33" />
                </svg>

                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-[#9DA4AA]">
                  KEYNOTE_BADGE
                </div>
              </div>
            </div>

            {/* Keynote Details (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3">
                <TechnicalLabel variant="red" code={keynote.code}>
                  FEATURED KEYNOTE
                </TechnicalLabel>
                <span className="text-xs font-mono text-[#9DA4AA]">
                  // {keynote.track}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mb-2">
                {keynote.name}
              </h3>

              <div className="text-sm font-mono text-[#EA4335] mb-4">
                {keynote.role} • {keynote.organization}
              </div>

              <div className="p-4 bg-[#171B1F] border border-[#292E33] rounded-[2px] w-full mb-6">
                <div className="text-xs font-mono text-[#9DA4AA] uppercase mb-1">
                  // FEATURED SESSION
                </div>
                <div className="text-base sm:text-lg font-bold font-display text-[#F5F3EE]">
                  "{keynote.sessionTitle}"
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href="/speakers">
                  <Button variant="secondary" size="sm" withArrow>
                    View Keynote Specs
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-[#9DA4AA]">
                  <span className="text-xs font-mono">[SOCIALS_ATTACHED_ON_CONFIRMATION]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Speaker Rail */}
        <div className="mb-8 flex items-center justify-between">
          <div className="text-xs font-mono text-[#9DA4AA] uppercase">
            // CONFIRMED TRACK SPEAKERS RAIL
          </div>
          <Link href="/speakers" className="text-xs font-mono text-[#B65F3C] hover:underline flex items-center gap-1">
            VIEW ALL SPEAKERS DIRECTORY <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {railSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group bg-[#0B0D0F] border border-[#292E33] p-5 flex flex-col justify-between hover:border-[#4285F4] transition-all duration-300 rounded-[2px] relative"
            >
              {/* Corner accent */}
              <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#292E33] group-hover:border-[#4285F4]" />

              <div>
                {/* Silhouette Thumbnail */}
                <div className="w-full h-36 bg-[#111417] border border-[#292E33] mb-4 flex items-center justify-center p-4 group-hover:bg-[#171B1F] transition-colors">
                  <svg viewBox="0 0 80 80" className="w-16 h-16 stroke-[#9DA4AA] fill-none" strokeWidth="1.2">
                    <circle cx="40" cy="30" r="14" />
                    <path d="M15 70 C15 50, 65 50, 65 70" />
                  </svg>
                </div>

                <div className="text-[10px] font-mono text-[#B65F3C] uppercase mb-1">
                  {speaker.track}
                </div>

                <h4 className="font-display font-bold text-base text-[#F5F3EE] uppercase tracking-wide group-hover:text-[#4285F4] transition-colors mb-1">
                  {speaker.name}
                </h4>

                <p className="text-xs font-mono text-[#9DA4AA] mb-4 line-clamp-2">
                  {speaker.role} • {speaker.organization}
                </p>
              </div>

              <div className="pt-3 border-t border-[#292E33] flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-[#6E767E] truncate max-w-[180px]">
                  {speaker.sessionTitle}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9DA4AA] group-hover:text-[#4285F4] shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
