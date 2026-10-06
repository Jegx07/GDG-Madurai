"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import {
  Sparkles,
  Cloud,
  Globe,
  Smartphone,
  Layers,
  Flame,
  GitBranch,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

interface Track {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  topics: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  leadTech: string;
}

const TRACKS: Track[] = [
  {
    id: "ai",
    number: "01",
    name: "ARTIFICIAL INTELLIGENCE",
    subtitle: "Gemini, Multimodal Foundations & Autonomous Agents",
    topics: ["Gemini 2.0 Flash", "Vertex AI", "Agentic Workflows", "Vector DBs", "LangChain/Genkit"],
    icon: Sparkles,
    accentColor: "text-[#EA4335]",
    borderColor: "hover:border-[#EA4335]",
    bgGlow: "group-hover:bg-[#EA4335]/5",
    leadTech: "GEMINI × VERTEX",
  },
  {
    id: "cloud",
    number: "02",
    name: "GOOGLE CLOUD PLATFORM",
    subtitle: "Hyperscale Infrastructure, Kubernetes & Resiliency",
    topics: ["Kubernetes (GKE)", "Cloud Run", "Serverless Architecture", "Observability", "Zero Trust"],
    icon: Cloud,
    accentColor: "text-[#4285F4]",
    borderColor: "hover:border-[#4285F4]",
    bgGlow: "group-hover:bg-[#4285F4]/5",
    leadTech: "GKE × RUN",
  },
  {
    id: "web",
    number: "03",
    name: "MODERN WEB PLATFORM",
    subtitle: "Next-Gen Web Standards, Chrome APIs & High Performance",
    topics: ["Next.js & React 19", "WebAssembly (Wasm)", "Core Web Vitals", "Edge Rendering", "PWA"],
    icon: Globe,
    accentColor: "text-[#34A853]",
    borderColor: "hover:border-[#34A853]",
    bgGlow: "group-hover:bg-[#34A853]/5",
    leadTech: "CHROME × NEXT.JS",
  },
  {
    id: "android",
    number: "04",
    name: "ANDROID ECOSYSTEM",
    subtitle: "Declarative UI, Jetpack Compose & Kotlin Multiplatform",
    topics: ["Jetpack Compose", "Kotlin 2.0", "On-Device AI (Gemini Nano)", "Material You", "Coroutines"],
    icon: Smartphone,
    accentColor: "text-[#34A853]",
    borderColor: "hover:border-[#34A853]",
    bgGlow: "group-hover:bg-[#34A853]/5",
    leadTech: "COMPOSE × KMP",
  },
  {
    id: "flutter",
    number: "05",
    name: "FLUTTER & DART",
    subtitle: "Multi-Platform Canvas Rendering & Unified Systems",
    topics: ["Flutter 3.x", "Dart 3 Patterns", "Impeller Engine", "State Management", "Desktop & Web"],
    icon: Layers,
    accentColor: "text-[#4285F4]",
    borderColor: "hover:border-[#4285F4]",
    bgGlow: "group-hover:bg-[#4285F4]/5",
    leadTech: "IMPELLER × DART",
  },
  {
    id: "firebase",
    number: "06",
    name: "FIREBASE & BACKEND",
    subtitle: "Realtime Data Fabric, Auth & Generative Extensions",
    topics: ["Firebase Genkit", "Firestore Vector Search", "Cloud Functions v2", "App Check", "Supabase"],
    icon: Flame,
    accentColor: "text-[#FBBC04]",
    borderColor: "hover:border-[#FBBC04]",
    bgGlow: "group-hover:bg-[#FBBC04]/5",
    leadTech: "FIRESTORE × GENKIT",
  },
  {
    id: "opensource",
    number: "07",
    name: "OPEN SOURCE & LINUX",
    subtitle: "Decentralized Systems, Community Maintainers & Kernels",
    topics: ["OSS Architecture", "Git Automation", "Linux Tooling", "Rust Integration", "RFC Workflows"],
    icon: GitBranch,
    accentColor: "text-[#B65F3C]",
    borderColor: "hover:border-[#B65F3C]",
    bgGlow: "group-hover:bg-[#B65F3C]/5",
    leadTech: "RUST × LINUX",
  },
  {
    id: "devtools",
    number: "08",
    name: "DEVELOPER TOOLS & DX",
    subtitle: "Agentic IDEs, Antigravity, CI/CD & Developer Experience",
    topics: ["Agentic IDEs", "Compiler Optimizations", "GitHub Actions", "Docker & DevContainers", "Observability"],
    icon: Wrench,
    accentColor: "text-[#F5F3EE]",
    borderColor: "hover:border-[#F5F3EE]",
    bgGlow: "group-hover:bg-[#F5F3EE]/5",
    leadTech: "AGY × DOCKER",
  },
];

export const EventTracks: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<Track>(TRACKS[0]);

  return (
    <Section
      id="tracks"
      chapter="CHAPTER 04"
      number="04.0"
      title="ENGINEERING TRACKS"
      subtitle="Eight technical streams curated for depth, architectural rigor, and direct real-world application."
    >
      <Container size="wide">
        {/* Editorial Track Selector Rail */}
        <div className="border border-[#292E33] bg-[#07080A] rounded-[2px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#292E33]">
            {/* Left Track List (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-[#292E33]">
              {TRACKS.map((track) => {
                const isSelected = activeTrack.id === track.id;
                const Icon = track.icon;

                return (
                  <div
                    key={track.id}
                    onMouseEnter={() => setActiveTrack(track)}
                    onClick={() => setActiveTrack(track)}
                    className={`group relative p-4 sm:p-5 flex items-center justify-between cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-[#171B1F] border-l-4 border-l-[#B65F3C]"
                        : "bg-transparent hover:bg-[#111417] border-l-4 border-l-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Track Number */}
                      <span className="font-mono text-xs sm:text-sm text-[#9DA4AA] group-hover:text-[#F5F3EE] transition-transform group-hover:translate-x-1">
                        [{track.number}]
                      </span>

                      {/* Icon */}
                      <div className="w-8 h-8 rounded border border-[#292E33] bg-[#0B0D0F] flex items-center justify-center">
                        <Icon className={`w-4 h-4 ${track.accentColor}`} />
                      </div>

                      {/* Track Title */}
                      <div>
                        <h4 className="font-display font-bold text-sm sm:text-base tracking-wide text-[#F5F3EE] uppercase group-hover:text-white transition-colors">
                          {track.name}
                        </h4>
                        <div className="text-[11px] font-mono text-[#9DA4AA] hidden sm:block">
                          {track.leadTech}
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight
                      className={`w-4 h-4 text-[#9DA4AA] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isSelected ? "text-[#B65F3C]" : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Active Track Inspection Dossier (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#111417] flex flex-col justify-between relative overflow-hidden">
              {/* Background Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: activeTrack.accentColor.replace("text-", "") }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <TechnicalLabel variant="terracotta" code={`TRACK // ${activeTrack.number}`}>
                    ACTIVE STREAM
                  </TechnicalLabel>
                  <span className="text-xs font-mono text-[#9DA4AA]">
                    {activeTrack.leadTech}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mb-3">
                  {activeTrack.name}
                </h3>

                <p className="text-sm font-sans text-[#9DA4AA] leading-relaxed mb-6">
                  {activeTrack.subtitle}
                </p>

                <div className="pt-6 border-t border-[#292E33]">
                  <div className="text-xs font-mono uppercase text-[#B65F3C] mb-3">
                    // KEY CURRICULUM TOPICS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeTrack.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 text-xs font-mono bg-[#171B1F] border border-[#292E33] text-[#F5F3EE] rounded-[2px]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-8 mt-8 border-t border-[#292E33]/60 flex items-center justify-between text-xs font-mono text-[#9DA4AA]">
                <span>LEVEL: INTERMEDIATE TO ADVANCED</span>
                <span className="text-[#B65F3C]">IN-PERSON SESSIONS</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
