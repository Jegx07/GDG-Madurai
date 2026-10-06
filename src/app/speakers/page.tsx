import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Speakers Directory | GDG Madurai DevFest 2026",
  description: "Browse the Google Developer Experts, open source maintainers, and systems architects speaking at DevFest Madurai 2026.",
};

const SPEAKERS_LIST = [
  {
    slug: "gde-ai-architect",
    name: "[SPEAKER_NAME // GDE AI]",
    role: "Google Developer Expert in Machine Learning",
    org: "[ORGANIZATION]",
    track: "ARTIFICIAL INTELLIGENCE",
    topic: "Multimodal Gemini Architectures & Autonomous Agents",
  },
  {
    slug: "cloud-infrastructure-lead",
    name: "[SPEAKER_NAME // CLOUD ARCHITECT]",
    role: "Staff Cloud Infrastructure Engineer",
    org: "[ENTERPRISE_ORG]",
    track: "GOOGLE CLOUD",
    topic: "Zero-Downtime Distributed GKE Workloads at Scale",
  },
  {
    slug: "android-mobile-lead",
    name: "[SPEAKER_NAME // ANDROID LEAD]",
    role: "Principal Mobile Architect",
    org: "[TECH_STUDIO]",
    track: "ANDROID ECOSYSTEM",
    topic: "Modern Declarative UI with Jetpack Compose & KMP",
  },
  {
    slug: "web-platform-engineer",
    name: "[SPEAKER_NAME // CHROME DEV]",
    role: "Web Platform Performance Engineer",
    org: "[OPEN_SOURCE_FOUNDATION]",
    track: "MODERN WEB",
    topic: "High-Performance Edge Rendering and Wasm Kernels",
  },
  {
    slug: "flutter-systems-architect",
    name: "[SPEAKER_NAME // FLUTTER SPECIALIST]",
    role: "Lead Mobile Specialist",
    org: "[PRODUCT_STUDIO]",
    track: "FLUTTER & DART",
    topic: "Hardware-Accelerated 60fps UIs with Impeller Engine",
  },
];

export default function SpeakersPage() {
  return (
    <div className="py-12 bg-[#0B0D0F]">
      <Container size="wide">
        <div className="mb-10">
          <TechnicalLabel variant="terracotta" code="ROSTER // 2026">
            FACULTY & PRACTITIONERS
          </TechnicalLabel>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mt-3">
            SPEAKER DIRECTORY
          </h1>
          <p className="text-base text-[#9DA4AA] font-sans max-w-2xl mt-2">
            Meet the engineers shaping generative AI, cloud resiliency, and platform performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKERS_LIST.map((sp) => (
            <Link
              key={sp.slug}
              href={`/speakers/${sp.slug}`}
              className="group bg-[#111417] border border-[#292E33] hover:border-[#4285F4] p-6 rounded-[2px] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-44 bg-[#0B0D0F] border border-[#292E33] mb-4 flex items-center justify-center p-4">
                  <svg viewBox="0 0 80 80" className="w-16 h-16 stroke-[#9DA4AA] fill-none" strokeWidth="1.2">
                    <circle cx="40" cy="30" r="14" />
                    <path d="M15 70 C15 50, 65 50, 65 70" />
                  </svg>
                </div>

                <div className="text-[10px] font-mono text-[#B65F3C] uppercase mb-1">
                  {sp.track}
                </div>

                <h3 className="font-display font-bold text-lg text-[#F5F3EE] uppercase group-hover:text-[#4285F4] transition-colors mb-1">
                  {sp.name}
                </h3>

                <p className="text-xs font-mono text-[#9DA4AA] mb-4">
                  {sp.role} • {sp.org}
                </p>
              </div>

              <div className="pt-3 border-t border-[#292E33] flex items-center justify-between text-xs font-mono text-[#9DA4AA]">
                <span className="truncate max-w-[200px]">{sp.topic}</span>
                <ArrowUpRight className="w-4 h-4 text-[#9DA4AA] group-hover:text-[#4285F4] shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
