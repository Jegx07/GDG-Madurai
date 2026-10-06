"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { BookOpen, Cpu, Users, Compass, Flame, TrendingUp } from "lucide-react";

interface Pillar {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  metric: string;
}

const PILLARS: Pillar[] = [
  {
    id: "learn",
    tag: "01 // MASTERY",
    title: "LEARN",
    description:
      "Deep-dive technical sessions, architectural case studies, and engineering breakdowns delivered by Google Developer Experts and industry veterans.",
    icon: BookOpen,
    accentColor: "text-[#4285F4]",
    borderColor: "hover:border-[#4285F4]/60",
    bgGlow: "group-hover:bg-[#4285F4]/5",
    metric: "20+ SESSIONS",
  },
  {
    id: "build",
    tag: "02 // EXECUTION",
    title: "BUILD",
    description:
      "Hands-on workshops and real-time code labs. Bring your machine, clone production repos, and deploy directly from Madurai to global infrastructure.",
    icon: Cpu,
    accentColor: "text-[#EA4335]",
    borderColor: "hover:border-[#EA4335]/60",
    bgGlow: "group-hover:bg-[#EA4335]/5",
    metric: "LIVE LABS",
  },
  {
    id: "connect",
    tag: "03 // NETWORK",
    title: "CONNECT",
    description:
      "High-density peer networking connecting students, founders, enterprise leads, and open-source contributors across Southern Tamil Nadu and beyond.",
    icon: Users,
    accentColor: "text-[#FBBC04]",
    borderColor: "hover:border-[#FBBC04]/60",
    bgGlow: "group-hover:bg-[#FBBC04]/5",
    metric: "500+ BUILDERS",
  },
  {
    id: "explore",
    tag: "04 // FRONTIER",
    title: "EXPLORE",
    description:
      "Experience multimodal AI, Gemini APIs, edge Android intelligence, cloud-native scale, and futuristic frameworks before they hit mainstream production.",
    icon: Compass,
    accentColor: "text-[#34A853]",
    borderColor: "hover:border-[#34A853]/60",
    bgGlow: "group-hover:bg-[#34A853]/5",
    metric: "NEXT-GEN TECH",
  },
  {
    id: "create",
    tag: "05 // INNOVATION",
    title: "CREATE",
    description:
      "Transform Tamil cultural mathematics, Kolam generative algorithms, and local community challenges into scalable, real-world software products.",
    icon: Flame,
    accentColor: "text-[#B65F3C]",
    borderColor: "hover:border-[#B65F3C]/60",
    bgGlow: "group-hover:bg-[#B65F3C]/5",
    metric: "LOCAL IMPACT",
  },
  {
    id: "grow",
    tag: "06 // IMPACT",
    title: "GROW",
    description:
      "Accelerate your engineering trajectory. Uncover startup mentorship, tech careers, open source pathways, and community leadership roles.",
    icon: TrendingUp,
    accentColor: "text-[#4285F4]",
    borderColor: "hover:border-[#4285F4]/60",
    bgGlow: "group-hover:bg-[#4285F4]/5",
    metric: "CAREER ACCEL",
  },
];

export const WhyDevFest: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("learn");

  return (
    <Section
      id="why-devfest"
      chapter="CHAPTER 02"
      number="02.0"
      title="MORE THAN AN EVENT."
      subtitle="DevFest Madurai 2026 is an engine of technical empowerment. We don't do passive talks; we cultivate builders who shape the future of technology."
    >
      <Container size="wide">
        {/* Kinetic Editorial Typography Ribbon */}
        <div className="mb-12 py-4 border-y border-[#292E33] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9DA4AA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B65F3C]" />
            <span>ETHOS // LEARN. BUILD. CONNECT. EXPERIMENT. SHARE. CREATE.</span>
          </div>
          <div className="text-[#F5F3EE] hidden sm:block">
            MADURAI DEVELOPER ECOSYSTEM // 2026
          </div>
        </div>

        {/* 6 Interactive Spotlight Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isHovered = activeId === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveId(pillar.id)}
                className={`group relative bg-[#111417] border border-[#292E33] p-7 transition-all duration-300 rounded-[2px] flex flex-col justify-between ${pillar.borderColor} ${pillar.bgGlow}`}
              >
                {/* Gopuram Corner Accent */}
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#292E33] group-hover:border-[#B65F3C] transition-colors" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#292E33] group-hover:border-[#B65F3C] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded border border-[#292E33] bg-[#171B1F] flex items-center justify-center transition-transform group-hover:scale-110">
                      <Icon className={`w-5 h-5 ${pillar.accentColor}`} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#9DA4AA]">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display uppercase tracking-wide text-[#F5F3EE] mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-sans text-[#9DA4AA] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#292E33]/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6E767E]">DELIVERY</span>
                  <span className={`font-semibold tracking-wider ${pillar.accentColor}`}>
                    {pillar.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
