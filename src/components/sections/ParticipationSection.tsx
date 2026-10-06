"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";
import { Mic, HeartHandshake, Briefcase, ArrowUpRight } from "lucide-react";

export const ParticipationSection: React.FC = () => {
  return (
    <Section
      id="participate"
      chapter="CHAPTER 12"
      number="12.0"
      title="JOIN THE BUILD"
      subtitle="DevFest Madurai is built by the community, for the community. Shape the conference from the stage, backstage, or through strategic partnership."
    >
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Panel 1: Speaker */}
          <div className="group bg-[#111417] border border-[#292E33] hover:border-[#4285F4] p-8 flex flex-col justify-between rounded-[2px] transition-all duration-300 relative overflow-hidden">
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#4285F4]" />
            <div>
              <div className="w-12 h-12 rounded border border-[#292E33] bg-[#0B0D0F] flex items-center justify-center text-[#4285F4] mb-6 group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono text-[#9DA4AA] uppercase tracking-widest block mb-2">
                // CALL FOR PROPOSALS
              </span>

              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#F5F3EE] mb-3">
                BECOME A SPEAKER
              </h3>

              <p className="text-sm font-sans text-[#9DA4AA] leading-relaxed mb-6">
                Have an architecture breakdown, Gemini implementation, or low-level systems
                breakthrough to share? We welcome first-time speakers and seasoned GDEs alike.
              </p>
            </div>

            <div className="pt-6 border-t border-[#292E33]">
              <a
                href="https://sessionize.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button variant="secondary" className="w-full" withArrow>
                  Submit Session (CFP)
                </Button>
              </a>
            </div>
          </div>

          {/* Panel 2: Volunteer */}
          <div className="group bg-[#111417] border border-[#292E33] hover:border-[#34A853] p-8 flex flex-col justify-between rounded-[2px] transition-all duration-300 relative overflow-hidden">
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#34A853]" />
            <div>
              <div className="w-12 h-12 rounded border border-[#292E33] bg-[#0B0D0F] flex items-center justify-center text-[#34A853] mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono text-[#9DA4AA] uppercase tracking-widest block mb-2">
                // OPERATIONS & CREW
              </span>

              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#F5F3EE] mb-3">
                BECOME A VOLUNTEER
              </h3>

              <p className="text-sm font-sans text-[#9DA4AA] leading-relaxed mb-6">
                Power the engine behind DevFest 2026. Manage technical track stages, attendee
                reception, code labs, media production, and community experience.
              </p>
            </div>

            <div className="pt-6 border-t border-[#292E33]">
              <Link href="/community" className="w-full block">
                <Button variant="secondary" className="w-full" withArrow>
                  Apply For Crew
                </Button>
              </Link>
            </div>
          </div>

          {/* Panel 3: Partner */}
          <div className="group bg-[#111417] border border-[#292E33] hover:border-[#B65F3C] p-8 flex flex-col justify-between rounded-[2px] transition-all duration-300 relative overflow-hidden">
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#B65F3C]" />
            <div>
              <div className="w-12 h-12 rounded border border-[#292E33] bg-[#0B0D0F] flex items-center justify-center text-[#B65F3C] mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono text-[#9DA4AA] uppercase tracking-widest block mb-2">
                // BRAND & RECRUITMENT
              </span>

              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#F5F3EE] mb-3">
                BECOME A PARTNER
              </h3>

              <p className="text-sm font-sans text-[#9DA4AA] leading-relaxed mb-6">
                Elevate your developer brand, hire exceptional engineering talent, and sponsor
                student travel grants for attendees across Southern Tamil Nadu.
              </p>
            </div>

            <div className="pt-6 border-t border-[#292E33]">
              <a href="mailto:organizers@gdgmadurai.in" className="w-full block">
                <Button variant="terracotta" className="w-full" withArrow>
                  Sponsor DevFest 2026
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
