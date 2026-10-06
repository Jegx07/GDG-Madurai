"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";

interface PartnerTier {
  tier: string;
  code: string;
  items: string[];
}

const PARTNER_TIERS: PartnerTier[] = [
  {
    tier: "TECHNOLOGY & ECOSYSTEM",
    code: "TIER 01",
    items: [
      "Google Developers",
      "Google Cloud",
      "Firebase",
      "TensorFlow User Group",
      "Women Techmakers",
    ],
  },
  {
    tier: "ACADEMIC & CAMPUS ALLIANCES",
    code: "TIER 02",
    items: [
      "[REGIONAL_ENGINEERING_COLLEGES]",
      "GDSC Campus Network",
      "Tamil Nadu Innovation Hubs",
      "[STUDENT_TECH_CHAPTERS]",
    ],
  },
  {
    tier: "COMMUNITY & OPEN SOURCE",
    code: "TIER 03",
    items: [
      "Tamil Developers Collective",
      "FOSS Madurai",
      "Cloud Native Tamil Nadu",
      "[COMMUNITY_PARTNERS]",
    ],
  },
];

export const PartnersSection: React.FC = () => {
  return (
    <Section
      id="partners"
      chapter="CHAPTER 11"
      number="11.0"
      title="ECOSYSTEM PARTNERS"
      subtitle="Supported by global developer programs, university chapters, and open-source foundations committed to Southern Tamil Nadu."
      variant="surface"
    >
      <Container size="wide">
        {/* Grayscale to Color Partner Matrix */}
        <div className="space-y-8">
          {PARTNER_TIERS.map((tierGroup) => (
            <div key={tierGroup.tier} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-[#B65F3C]">{tierGroup.code}</span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#9DA4AA]">
                  // {tierGroup.tier}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {tierGroup.items.map((partner, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#0B0D0F] border border-[#292E33] p-4 sm:p-5 flex flex-col items-center justify-center text-center rounded-[2px] hover:border-[#4285F4] transition-all duration-200 min-h-[90px]"
                  >
                    <span className="text-xs font-mono font-medium text-[#9DA4AA] group-hover:text-[#F5F3EE] transition-colors">
                      {partner}
                    </span>
                    <span className="text-[9px] font-mono text-[#6E767E] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      VERIFIED PARTNER
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Partner Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B0D0F] border border-[#292E33] rounded-[2px] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-[#B65F3C] uppercase mb-1">
              SUPPORT THE MOVEMENT
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display uppercase text-[#F5F3EE]">
              WANT TO SPONSOR GDG MADURAI DEVFEST 2026?
            </h4>
            <p className="text-xs font-sans text-[#9DA4AA] mt-1 max-w-xl">
              Connect directly with 500+ passionate software developers, engineers, and tech decision-makers.
            </p>
          </div>

          <a href="mailto:organizers@gdgmadurai.in">
            <Button variant="secondary" size="md" withArrow>
              Request Prospectus
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  );
};
