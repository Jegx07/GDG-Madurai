"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Check, ShieldCheck, Sparkles, Award } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

interface Badge {
  id: string;
  name: string;
  category: string;
  description: string;
  color: string;
}

const BADGES: Badge[] = [
  {
    id: "b-roots",
    name: "MADURAI ROOTS",
    category: "CULTURE",
    description: "Explored the Gopuram geometry and architectural heritage.",
    color: "#B65F3C",
  },
  {
    id: "b-gemini",
    name: "GEMINI 2.0 PIONEER",
    category: "AI",
    description: "Inspected multimodal AI architectures and agentic pipelines.",
    color: "#EA4335",
  },
  {
    id: "b-cloud",
    name: "GKE ARCHITECT",
    category: "CLOUD",
    description: "Reviewed distributed Kubernetes topologies on Google Cloud.",
    color: "#4285F4",
  },
  {
    id: "b-kolam",
    name: "ALGORITHMIC KOLAM",
    category: "CREATIVE",
    description: "Synthesized procedural Tamil mathematical patterns.",
    color: "#FBBC04",
  },
  {
    id: "b-builder",
    name: "VERIFIED BUILDER",
    category: "COMMUNITY",
    description: "Ready to assemble and deploy in-person at DevFest 2026.",
    color: "#34A853",
  },
];

export const DeveloperPassport: React.FC = () => {
  const [unlocked, setUnlocked] = useState<string[]>(["b-roots", "b-kolam"]);

  const toggleBadge = (id: string) => {
    if (unlocked.includes(id)) {
      setUnlocked(unlocked.filter((b) => b !== id));
    } else {
      const next = [...unlocked, id];
      setUnlocked(next);
      if (next.length === BADGES.length) {
        try {
          confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
        } catch (e) {}
      }
    }
  };

  return (
    <div className="bg-[#07080A] border border-[#292E33] rounded-[2px] p-6 flex flex-col justify-between h-[380px]">
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#292E33] mb-4">
          <div>
            <h4 className="text-sm font-bold font-display uppercase text-[#F5F3EE]">
              DEVFEST DEVELOPER PASSPORT
            </h4>
            <span className="text-[10px] font-mono text-[#9DA4AA]">
              CREDENTIALS & LAB COMPLETION TRACKER
            </span>
          </div>
          <span className="text-xs font-mono text-[#34A853]">
            {unlocked.length}/{BADGES.length} UNLOCKED
          </span>
        </div>

        <div className="space-y-2.5 overflow-y-auto max-h-[220px] pr-1">
          {BADGES.map((badge) => {
            const isCollected = unlocked.includes(badge.id);

            return (
              <div
                key={badge.id}
                onClick={() => toggleBadge(badge.id)}
                className={`p-3 border rounded-[2px] flex items-center justify-between cursor-pointer transition-all duration-200 ${
                  isCollected
                    ? "bg-[#111417] border-[#292E33] hover:border-[#4285F4]"
                    : "bg-[#0B0D0F] border-[#1C2024] opacity-50 hover:opacity-80"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded border flex items-center justify-center"
                    style={{
                      borderColor: `${badge.color}60`,
                      backgroundColor: `${badge.color}15`,
                    }}
                  >
                    <Award className="w-3.5 h-3.5" style={{ color: badge.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-[#F5F3EE]">
                      {badge.name}
                    </div>
                    <div className="text-[10px] text-[#9DA4AA] font-sans">
                      {badge.description}
                    </div>
                  </div>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                    isCollected
                      ? "bg-[#34A853] border-[#34A853] text-white"
                      : "border-[#292E33] bg-transparent text-transparent"
                  }`}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-3 border-t border-[#292E33] flex items-center justify-between text-[11px] font-mono text-[#6E767E]">
        <span>CLICK TO CLAIM BADGES</span>
        <span className="text-[#B65F3C]">PERSISTED IN LAB STATE</span>
      </div>
    </div>
  );
};
