"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { DeveloperTerminal } from "@/components/interactive/DeveloperTerminal";
import { DigitalKolamGenerator } from "@/components/interactive/DigitalKolamGenerator";
import { DeveloperPassport } from "@/components/interactive/DeveloperPassport";
import { Terminal, Sparkles, Award } from "lucide-react";

export const InteractiveLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"terminal" | "kolam" | "passport">("kolam");

  return (
    <Section
      id="interactive"
      chapter="CHAPTER 09"
      number="09.0"
      title="DEVFEST INTERACTIVE LAB"
      subtitle="Code is not a passive spectator sport. Experiment with our procedural Tamil geometry synthesizer, easter-egg CLI terminal, and attendee passport."
      variant="surface"
    >
      <Container size="wide">
        {/* Experience Selector Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-[#292E33] pb-4">
          <button
            onClick={() => setActiveTab("kolam")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border rounded-[2px] flex items-center gap-2 transition-all ${
              activeTab === "kolam"
                ? "bg-[#B65F3C] border-[#B65F3C] text-white"
                : "bg-[#111417] border-[#292E33] text-[#9DA4AA] hover:text-[#F5F3EE]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Kolam</span>
          </button>

          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border rounded-[2px] flex items-center gap-2 transition-all ${
              activeTab === "terminal"
                ? "bg-[#4285F4] border-[#4285F4] text-white"
                : "bg-[#111417] border-[#292E33] text-[#9DA4AA] hover:text-[#F5F3EE]"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer CLI</span>
          </button>

          <button
            onClick={() => setActiveTab("passport")}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border rounded-[2px] flex items-center gap-2 transition-all ${
              activeTab === "passport"
                ? "bg-[#34A853] border-[#34A853] text-white"
                : "bg-[#111417] border-[#292E33] text-[#9DA4AA] hover:text-[#F5F3EE]"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Builder Passport</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "kolam" && <DigitalKolamGenerator />}
          {activeTab === "terminal" && <DeveloperTerminal />}
          {activeTab === "passport" && <DeveloperPassport />}
        </div>
      </Container>
    </Section>
  );
};
