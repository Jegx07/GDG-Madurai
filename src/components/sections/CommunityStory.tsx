"use client";

import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { ArrowUpRight, Users, Code, Calendar, Award } from "lucide-react";

export const CommunityStory: React.FC = () => {
  return (
    <Section
      id="community"
      chapter="CHAPTER 07"
      number="07.0"
      title="THIS IS BIGGER THAN ONE DAY."
      subtitle="GDG Madurai is an active developer collective operating 365 days a year. From weekend hack sprints to campus masterclasses, we build together."
      variant="surface"
    >
      <Container size="wide">
        {/* Editorial Collage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Feature Box (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0B0D0F] border border-[#292E33] p-8 sm:p-12 flex flex-col justify-between relative rounded-[2px] overflow-hidden">
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#B65F3C]" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <TechnicalLabel variant="terracotta" code="COMMUNITY // ECOSYSTEM">
                  GRASSROOTS INGENUITY
                </TechnicalLabel>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mb-4 leading-snug">
                NURTURING TAMIL NADU’S NEXT GENERATION OF SYSTEMS BUILDERS.
              </h3>

              <p className="text-base font-sans text-[#9DA4AA] leading-relaxed mb-6">
                Madurai possesses a unique engineering culture: fiercely curious, deeply
                disciplined, and grounded in problem-solving. We bring together developers,
                students from regional institutions, engineering faculty, and tech founders to
                democratize access to Google technologies and modern architectures.
              </p>
            </div>

            {/* Collage Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#292E33] font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#4285F4]">50+</div>
                <div className="text-[10px] sm:text-xs text-[#9DA4AA] uppercase mt-1">
                  MEETUPS CONDUCTED
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#34A853]">4,000+</div>
                <div className="text-[10px] sm:text-xs text-[#9DA4AA] uppercase mt-1">
                  COMMUNITY MEMBERS
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#FBBC04]">100%</div>
                <div className="text-[10px] sm:text-xs text-[#9DA4AA] uppercase mt-1">
                  OPEN SOURCE ETHOS
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Box 1: Tech Labs */}
            <div className="bg-[#0B0D0F] border border-[#292E33] p-6 flex flex-col justify-between rounded-[2px] relative group hover:border-[#4285F4] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#4285F4] uppercase">
                    // WORKSHOPS & CODE JAMS
                  </span>
                  <Code className="w-4 h-4 text-[#9DA4AA]" />
                </div>
                <h4 className="text-lg font-bold font-display uppercase text-[#F5F3EE] mb-2">
                  HANDS-ON CLOUD & AI LABS
                </h4>
                <p className="text-xs font-sans text-[#9DA4AA] leading-relaxed">
                  Regular weekend code bootcamps covering Vertex AI, Flutter architecture,
                  Supabase backends, and Golang microservices.
                </p>
              </div>
            </div>

            {/* Box 2: Campus Chapters */}
            <div className="bg-[#0B0D0F] border border-[#292E33] p-6 flex flex-col justify-between rounded-[2px] relative group hover:border-[#34A853] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#34A853] uppercase">
                    // GDSC & STUDENT HUBS
                  </span>
                  <Users className="w-4 h-4 text-[#9DA4AA]" />
                </div>
                <h4 className="text-lg font-bold font-display uppercase text-[#F5F3EE] mb-2">
                  CAMPUS OUTREACH INITIATIVE
                </h4>
                <p className="text-xs font-sans text-[#9DA4AA] leading-relaxed">
                  Connecting collegiate developer clubs across Madurai, Dindigul, Sivakasi,
                  and Virudhunagar with enterprise engineers.
                </p>
              </div>
            </div>

            {/* Box 3: Community Portal CTA */}
            <div className="bg-[#171B1F] border border-[#B65F3C]/40 p-6 flex items-center justify-between rounded-[2px]">
              <div>
                <div className="text-xs font-mono text-[#B65F3C] uppercase mb-1">
                  JOIN THE MOVEMENT
                </div>
                <div className="text-sm font-bold font-display uppercase text-[#F5F3EE]">
                  BECOME A GDG MADURAI MEMBER
                </div>
              </div>
              <Link
                href="/community"
                className="w-9 h-9 rounded border border-[#B65F3C] flex items-center justify-center text-[#B65F3C] hover:bg-[#B65F3C] hover:text-white transition-colors"
                aria-label="View community page"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 21: Verified Community Timeline */}
        <div className="mt-16 pt-12 border-t border-[#292E33]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <TechnicalLabel variant="terracotta" code="CHRONICLE">
                COMMUNITY MILESTONES
              </TechnicalLabel>
              <h4 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#F5F3EE] mt-2">
                THE EXPANSION ARC
              </h4>
            </div>
            <span className="text-xs font-mono text-[#9DA4AA] hidden sm:inline">
              VERIFIED MILESTONES ONLY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#0B0D0F] border border-[#292E33] p-4 rounded-[2px]">
              <div className="text-xs font-mono text-[#B65F3C] font-semibold mb-1">2023 - 2024</div>
              <div className="text-sm font-bold font-display uppercase text-[#F5F3EE] mb-1">
                COMMUNITY REBOOT
              </div>
              <p className="text-xs font-sans text-[#9DA4AA]">
                GDG Madurai expands technical meetups, inaugurating monthly in-person tech sessions.
              </p>
            </div>

            <div className="bg-[#0B0D0F] border border-[#292E33] p-4 rounded-[2px]">
              <div className="text-xs font-mono text-[#4285F4] font-semibold mb-1">2024 - 2025</div>
              <div className="text-sm font-bold font-display uppercase text-[#F5F3EE] mb-1">
                DEV CLOUD ROADSHOWS
              </div>
              <p className="text-xs font-sans text-[#9DA4AA]">
                Multi-college Cloud Study Jams and Google Cloud infrastructure workshops.
              </p>
            </div>

            <div className="bg-[#0B0D0F] border border-[#292E33] p-4 rounded-[2px]">
              <div className="text-xs font-mono text-[#34A853] font-semibold mb-1">EARLY 2026</div>
              <div className="text-sm font-bold font-display uppercase text-[#F5F3EE] mb-1">
                GEMINI AI SPRINT
              </div>
              <p className="text-xs font-sans text-[#9DA4AA]">
                Local generative AI hackathons focused on building Tamil NLP and regional tech tools.
              </p>
            </div>

            <div className="bg-[#171B1F] border border-[#B65F3C] p-4 rounded-[2px] relative">
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#B65F3C] animate-ping" />
              <div className="text-xs font-mono text-[#FBBC04] font-semibold mb-1">OCTOBER 2026</div>
              <div className="text-sm font-bold font-display uppercase text-[#F5F3EE] mb-1">
                DEVFEST MADURAI 2026
              </div>
              <p className="text-xs font-sans text-[#9DA4AA]">
                The flagship annual developer conference bringing 500+ builders together.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
