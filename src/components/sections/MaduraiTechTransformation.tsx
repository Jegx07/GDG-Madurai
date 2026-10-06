"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { MapPin, Network, Sparkles, Code2, Cloud, Cpu, Globe2, ArrowRight } from "lucide-react";

interface Step {
  stage: string;
  sub: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  visualType: "architecture" | "street" | "kolam" | "community" | "code" | "cloud" | "ai" | "world";
}

const STEPS: Step[] = [
  {
    stage: "01",
    sub: "ROOTS",
    title: "MADURAI",
    tagline: "The Lotus City of Eternal Architecture",
    description:
      "Centuries of stacked symmetry, granite precision, and Gopuram verticality lay the cultural foundation for modular, enduring software systems.",
    icon: MapPin,
    accent: "#B65F3C",
    visualType: "architecture",
  },
  {
    stage: "02",
    sub: "URBAN",
    title: "STREETS",
    tagline: "Concentric Rings Around the Core",
    description:
      "The concentric street layout of Old Madurai mirrors modern network routing tables and resilient distributed topologies.",
    icon: Network,
    accent: "#9DA4AA",
    visualType: "street",
  },
  {
    stage: "03",
    sub: "MATH",
    title: "PATTERNS",
    tagline: "Kolam: Procedural Geometry Since Antiquity",
    description:
      "Tamil algorithmic dot matrices, symmetry invariance, and procedural loop logic woven into dawn thresholds across thousands of generations.",
    icon: Sparkles,
    accent: "#FBBC04",
    visualType: "kolam",
  },
  {
    stage: "04",
    sub: "PEOPLE",
    title: "COMMUNITY",
    tagline: "GDG Madurai: The Local Human Node",
    description:
      "Passionate student developers, senior staff engineers, and grassroots tech leaders congregating to teach, exchange, and elevate.",
    icon: Network,
    accent: "#4285F4",
    visualType: "community",
  },
  {
    stage: "05",
    sub: "LOGIC",
    title: "CODE",
    tagline: "Synthesizing Ideas Into Compilable Systems",
    description:
      "From local meetups to GitHub repositories. Writing deterministic TypeScript, performant Go, robust Kotlin, and resilient microservices.",
    icon: Code2,
    accent: "#34A853",
    visualType: "code",
  },
  {
    stage: "06",
    sub: "SCALE",
    title: "CLOUD",
    tagline: "Global Elastic Compute from Tamil Nadu",
    description:
      "Deploying containerized clusters on Google Kubernetes Engine and Vertex AI infrastructure across worldwide regions.",
    icon: Cloud,
    accent: "#4285F4",
    visualType: "cloud",
  },
  {
    stage: "07",
    sub: "FRONTIER",
    title: "AI",
    tagline: "Multimodal Intelligence & Agentic Reasoning",
    description:
      "Empowering local problem solvers with Gemini 1.5/2.0 APIs, fine-tuned domain models, and autonomous AI developer workflows.",
    icon: Cpu,
    accent: "#EA4335",
    visualType: "ai",
  },
  {
    stage: "08",
    sub: "DESTINATION",
    title: "WORLD",
    tagline: "Build from Madurai. Deliver to 8 Billion",
    description:
      "Democratizing innovation. Demonstrating that world-class software engineering and global category leaders originate right here in Madurai.",
    icon: Globe2,
    accent: "#B65F3C",
    visualType: "world",
  },
];

export const MaduraiTechTransformation: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];
  const Icon = activeStep.icon;

  return (
    <Section
      id="madurai-tech"
      chapter="CHAPTER 03"
      number="03.0"
      title="ROOTED HERE. BUILT FOR EVERYWHERE."
      subtitle="Madurai is not just a backdrop. It is our cognitive blueprint. Trace the unbroken continuum from ancient architectural mathematics to modern AI."
      variant="surface"
    >
      <Container size="wide">
        {/* Interactive Step Navigator */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {STEPS.map((step, idx) => {
              const isCurrent = idx === activeStepIndex;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-3 py-2 text-xs font-mono tracking-wider uppercase border transition-all duration-200 flex items-center gap-2 rounded-[2px] ${
                    isCurrent
                      ? "bg-[#171B1F] border-[#B65F3C] text-[#F5F3EE] shadow-[0_0_15px_rgba(182,95,60,0.25)]"
                      : "bg-[#0B0D0F] border-[#292E33] text-[#9DA4AA] hover:text-[#F5F3EE] hover:border-[#4285F4]"
                  }`}
                >
                  <span className="opacity-50">{step.stage}</span>
                  <span className="font-semibold">{step.title}</span>
                  {idx < STEPS.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#6E767E] ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Transformation Display Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B0D0F] border border-[#292E33] p-6 sm:p-10 lg:p-12 relative overflow-hidden rounded-[2px]">
          {/* Subtle Gopuram corner markers */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#B65F3C]" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#B65F3C]" />

          {/* Left: Deep Technical Narrative (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <div className="flex items-center gap-2 mb-4">
              <TechnicalLabel variant="terracotta" code={`STAGE ${activeStep.stage}/08`}>
                {activeStep.sub}
              </TechnicalLabel>
              <span className="text-xs font-mono text-[#9DA4AA]">
                MADURAI EVOLUTION CONTINUUM
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mb-2">
              {activeStep.title}
            </h3>

            <div className="text-sm sm:text-base font-mono font-medium text-[#B65F3C] mb-6">
              // {activeStep.tagline}
            </div>

            <p className="text-base sm:text-lg font-sans text-[#9DA4AA] leading-relaxed mb-8 max-w-xl">
              {activeStep.description}
            </p>

            {/* Stage Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs font-mono uppercase border border-[#292E33] bg-[#171B1F] text-[#9DA4AA] hover:text-[#F5F3EE] disabled:opacity-40 disabled:pointer-events-none rounded-[2px]"
              >
                Previous Stage
              </button>
              <button
                disabled={activeStepIndex === STEPS.length - 1}
                onClick={() =>
                  setActiveStepIndex((prev) => Math.min(STEPS.length - 1, prev + 1))
                }
                className="px-4 py-2 text-xs font-mono uppercase border border-[#B65F3C] bg-[#B65F3C] text-white hover:bg-[#A35232] disabled:opacity-40 disabled:pointer-events-none rounded-[2px]"
              >
                Next Stage →
              </button>
            </div>
          </div>

          {/* Right: Generative SVG Graphic Representing the Stage (5 Cols) */}
          <div className="lg:col-span-5 flex items-center justify-center p-4 bg-[#111417] border border-[#292E33] min-h-[320px] rounded-[2px] relative">
            <div
              className="absolute inset-0 bg-noise opacity-30 pointer-events-none"
              aria-hidden="true"
            />

            {/* Dynamic Stage Graphic */}
            <div className="relative z-10 w-full max-w-[280px] h-[260px] flex items-center justify-center">
              {activeStep.visualType === "architecture" && (
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#B65F3C] fill-none" strokeWidth="1.5">
                  <polygon points="100,20 130,50 70,50" />
                  <rect x="60" y="55" width="80" height="25" />
                  <rect x="50" y="85" width="100" height="30" />
                  <rect x="40" y="120" width="120" height="35" />
                  <rect x="30" y="160" width="140" height="30" />
                  <line x1="100" y1="20" x2="100" y2="190" strokeDasharray="3 3" stroke="#4285F4" />
                </svg>
              )}

              {activeStep.visualType === "street" && (
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#9DA4AA] fill-none" strokeWidth="1.2">
                  <circle cx="100" cy="100" r="20" stroke="#B65F3C" strokeWidth="2" />
                  <circle cx="100" cy="100" r="45" strokeDasharray="4 3" />
                  <circle cx="100" cy="100" r="70" strokeDasharray="6 4" />
                  <circle cx="100" cy="100" r="90" />
                  <line x1="10" y1="100" x2="190" y2="100" stroke="#4285F4" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke="#4285F4" />
                </svg>
              )}

              {activeStep.visualType === "kolam" && (
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#FBBC04] fill-none" strokeWidth="1.5">
                  <circle cx="100" cy="100" r="4" fill="#FBBC04" />
                  <circle cx="70" cy="100" r="3" fill="#FBBC04" />
                  <circle cx="130" cy="100" r="3" fill="#FBBC04" />
                  <circle cx="100" cy="70" r="3" fill="#FBBC04" />
                  <circle cx="100" cy="130" r="3" fill="#FBBC04" />
                  <path d="M70 100 Q100 70 130 100 Q100 130 70 100 Z" />
                  <path d="M100 70 Q130 100 100 130 Q70 100 100 70 Z" />
                  <circle cx="100" cy="100" r="65" strokeDasharray="3 3" stroke="#B65F3C" />
                </svg>
              )}

              {activeStep.visualType === "community" && (
                <svg viewBox="0 0 200 200" className="w-full h-full fill-none">
                  <circle cx="100" cy="100" r="12" fill="#4285F4" />
                  <circle cx="50" cy="60" r="8" fill="#34A853" />
                  <circle cx="150" cy="60" r="8" fill="#FBBC04" />
                  <circle cx="60" cy="150" r="8" fill="#EA4335" />
                  <circle cx="140" cy="150" r="8" fill="#B65F3C" />
                  <line x1="100" y1="100" x2="50" y2="60" stroke="#292E33" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="150" y2="60" stroke="#292E33" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="60" y2="150" stroke="#292E33" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="140" y2="150" stroke="#292E33" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="75" stroke="#4285F4" strokeDasharray="4 4" strokeWidth="1" />
                </svg>
              )}

              {activeStep.visualType === "code" && (
                <div className="w-full font-mono text-[11px] text-[#9DA4AA] bg-[#07080A] p-4 border border-[#292E33] leading-relaxed">
                  <div className="text-[#B65F3C] font-semibold">// DevFest Madurai 2026</div>
                  <div className="text-[#4285F4]">const build = () =&gt; &#123;</div>
                  <div className="pl-4 text-[#F5F3EE]">origin: &quot;Madurai&quot;,</div>
                  <div className="pl-4 text-[#34A853]">runtime: &quot;Future&quot;,</div>
                  <div className="pl-4 text-[#FBBC04]">deploy: true</div>
                  <div className="text-[#4285F4]">&#125;;</div>
                  <div className="mt-2 text-[#EA4335]">build.start();</div>
                </div>
              )}

              {activeStep.visualType === "cloud" && (
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#4285F4] fill-none" strokeWidth="1.5">
                  <path d="M50 130 A30 30 0 0 1 90 80 A40 40 0 0 1 150 90 A25 25 0 0 1 150 130 Z" />
                  <line x1="70" y1="140" x2="70" y2="170" stroke="#34A853" strokeDasharray="3 3" />
                  <line x1="100" y1="140" x2="100" y2="170" stroke="#4285F4" strokeDasharray="3 3" />
                  <line x1="130" y1="140" x2="130" y2="170" stroke="#FBBC04" strokeDasharray="3 3" />
                </svg>
              )}

              {activeStep.visualType === "ai" && (
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#EA4335] fill-none" strokeWidth="1.5">
                  <polygon points="100,30 160,65 160,135 100,170 40,135 40,65" />
                  <circle cx="100" cy="100" r="25" stroke="#FBBC04" />
                  <line x1="100" y1="30" x2="100" y2="75" stroke="#4285F4" />
                  <line x1="160" y1="135" x2="120" y2="115" stroke="#34A853" />
                  <line x1="40" y1="135" x2="80" y2="115" stroke="#B65F3C" />
                </svg>
              )}

              {activeStep.visualType === "world" && (
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#B65F3C] fill-none" strokeWidth="1.2">
                  <circle cx="100" cy="100" r="80" />
                  <ellipse cx="100" cy="100" rx="40" ry="80" strokeDasharray="4 3" />
                  <line x1="20" y1="100" x2="180" y2="100" />
                  <circle cx="120" cy="85" r="5" fill="#4285F4" stroke="none" />
                  <circle cx="120" cy="85" r="10" stroke="#4285F4" strokeDasharray="2 2" className="animate-ping" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
