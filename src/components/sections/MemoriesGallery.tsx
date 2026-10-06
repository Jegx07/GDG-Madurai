"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { ArrowUpRight, X, Maximize2, Tag, Calendar } from "lucide-react";

interface Memory {
  id: string;
  title: string;
  category: "DEVFEST" | "MEETUPS" | "WORKSHOPS" | "HACKATHONS" | "COMMUNITY";
  date: string;
  location: string;
  caption: string;
  aspect: "tall" | "wide" | "square";
  accent: string;
}

const MEMORIES: Memory[] = [
  {
    id: "mem-1",
    title: "DevFest Inaugural Session",
    category: "DEVFEST",
    date: "OCTOBER 2024",
    location: "Main Auditorium, Madurai",
    caption: "Full-house keynote exploring the convergence of distributed cloud and mobile engineering.",
    aspect: "wide",
    accent: "#B65F3C",
  },
  {
    id: "mem-2",
    title: "Android Compose Code Jam",
    category: "WORKSHOPS",
    date: "JANUARY 2025",
    location: "Tech Incubator Hub",
    caption: "Developers pair programming on declarative UI components with Kotlin Multiplatform.",
    aspect: "tall",
    accent: "#34A853",
  },
  {
    id: "mem-3",
    title: "Gemini AI Build Marathon",
    category: "HACKATHONS",
    date: "MARCH 2025",
    location: "Campus Innovation Lab",
    caption: "Over 36 continuous hours of building multimodal agents and regional assistive AI tooling.",
    aspect: "square",
    accent: "#EA4335",
  },
  {
    id: "mem-4",
    title: "Cloud Architecture Round-Table",
    category: "MEETUPS",
    date: "JULY 2025",
    location: "Community Space, Madurai",
    caption: "Senior infrastructure leads discussing Kubernetes cluster resiliency and edge caching.",
    aspect: "square",
    accent: "#4285F4",
  },
  {
    id: "mem-5",
    title: "Madurai Tech Leaders Circle",
    category: "COMMUNITY",
    date: "NOVEMBER 2025",
    location: "Vaigai Riverside Venue",
    caption: "Organizers, volunteers, and speaker mentors connecting after a full day of developer talks.",
    aspect: "wide",
    accent: "#FBBC04",
  },
  {
    id: "mem-6",
    title: "Flutter & Web Performance Lab",
    category: "WORKSHOPS",
    date: "FEBRUARY 2026",
    location: "Engineering Hall",
    caption: "Analyzing sub-second render pipelines and canvas profiling with Impeller.",
    aspect: "tall",
    accent: "#B65F3C",
  },
];

export const MemoriesGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const categories = ["ALL", "DEVFEST", "MEETUPS", "WORKSHOPS", "HACKATHONS", "COMMUNITY"];

  const filteredMemories =
    activeFilter === "ALL"
      ? MEMORIES
      : MEMORIES.filter((m) => m.category === activeFilter);

  return (
    <Section
      id="memories"
      chapter="CHAPTER 08"
      number="08.0"
      title="COMMUNITY ARCHIVE"
      subtitle="A living tapestry of past gatherings, late-night hackathons, whiteboard diagrams, and developer camaraderie across Madurai."
    >
      <Container size="wide">
        {/* Filter Pills */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#292E33]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border rounded-[2px] transition-colors ${
                  activeFilter === cat
                    ? "bg-[#B65F3C] border-[#B65F3C] text-white"
                    : "bg-[#111417] border-[#292E33] text-[#9DA4AA] hover:text-[#F5F3EE]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Link
            href="/memories"
            className="text-xs font-mono text-[#B65F3C] hover:underline flex items-center gap-1"
          >
            OPEN FULL PHOTO VAULT <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Masonry / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMemories.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMemory(item)}
              className="group cursor-pointer bg-[#111417] border border-[#292E33] hover:border-[#B65F3C] p-5 flex flex-col justify-between rounded-[2px] transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner accent */}
              <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#292E33] group-hover:border-[#B65F3C]" />

              {/* Graphic Placeholder Canvas */}
              <div className="w-full h-48 bg-[#0B0D0F] border border-[#292E33] mb-4 relative flex items-center justify-center p-4 overflow-hidden group-hover:bg-[#171B1F] transition-colors">
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#9DA4AA_1px,transparent_1px)] bg-[size:16px_16px]"
                  aria-hidden="true"
                />

                {/* Geometric Abstract Community Graphic */}
                <div className="text-center z-10">
                  <div className="w-12 h-12 mx-auto rounded border border-[#292E33] flex items-center justify-center mb-2 text-[#9DA4AA] group-hover:text-[#F5F3EE] group-hover:border-[#4285F4] transition-colors">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#9DA4AA] uppercase tracking-widest">
                    ARCHIVE // {item.category}
                  </span>
                </div>

                <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-mono text-[#6E767E]">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-mono uppercase font-semibold px-2 py-0.5 rounded-[2px] border"
                    style={{
                      color: item.accent,
                      borderColor: `${item.accent}40`,
                      backgroundColor: `${item.accent}10`,
                    }}
                  >
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#9DA4AA]">
                    {item.location}
                  </span>
                </div>

                <h4 className="text-base font-bold font-display uppercase tracking-wide text-[#F5F3EE] mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs font-sans text-[#9DA4AA] line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Memory Inspection Modal */}
        {selectedMemory && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-[#0B0D0F] border border-[#292E33] max-w-2xl w-full p-6 sm:p-8 rounded-[2px] relative">
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 p-2 text-[#9DA4AA] hover:text-white rounded border border-[#292E33] hover:border-[#4285F4]"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <TechnicalLabel variant="terracotta" code="ARCHIVE">
                  {selectedMemory.category}
                </TechnicalLabel>
                <span className="text-xs font-mono text-[#9DA4AA]">
                  {selectedMemory.date}
                </span>
              </div>

              {/* Graphic container */}
              <div className="w-full h-64 bg-[#111417] border border-[#292E33] mb-6 flex flex-col items-center justify-center p-6 text-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-[#B65F3C] fill-none mb-3" strokeWidth="1.2">
                  <polygon points="50,15 85,85 15,85" />
                  <circle cx="50" cy="55" r="15" stroke="#4285F4" />
                </svg>
                <div className="text-xs font-mono text-[#9DA4AA]">
                  GDG MADURAI DOCUMENTED MOMENT // {selectedMemory.location}
                </div>
              </div>

              <h3 className="text-2xl font-bold font-display uppercase text-[#F5F3EE] mb-3">
                {selectedMemory.title}
              </h3>

              <p className="text-sm font-sans text-[#9DA4AA] leading-relaxed mb-6">
                {selectedMemory.caption}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#292E33] text-xs font-mono text-[#6E767E]">
                <span>ARCHIVE ID: {selectedMemory.id}</span>
                <span className="text-[#B65F3C]">TAMIL NADU DEVELOPER ECOSYSTEM</span>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
