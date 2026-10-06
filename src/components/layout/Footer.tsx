import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Linkedin, Youtube, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#07080A] border-t border-[#292E33] overflow-hidden pt-16 pb-12">
      {/* Background Architectural Gopuram Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#292E33_1px,transparent_1px),linear-gradient(to_bottom,#292E33_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        {/* Editorial Headline */}
        <div className="pb-16 border-b border-[#292E33]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <TechnicalLabel variant="terracotta" code="GDG // MDR">
                BUILD FROM MADURAI
              </TechnicalLabel>
              <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F3EE] uppercase font-display leading-tight">
                BUILT IN MADURAI. <br />
                <span className="text-[#B65F3C]">CONNECTED TO THE WORLD.</span>
              </h2>
            </div>

            {/* Architectural Digital Gopuram Line Graphic */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:block text-right">
                <div className="text-xs font-mono text-[#9DA4AA]">COORDINATES</div>
                <div className="text-sm font-mono text-[#F5F3EE] font-semibold">
                  9°55'30.7" N 78°07'11.3" E
                </div>
                <div className="text-xs font-mono text-[#B65F3C]">TAMIL NADU, INDIA</div>
              </div>

              {/* Geometric Gopuram Silhouette SVG */}
              <div className="w-16 h-20 border border-[#292E33] bg-[#111417] p-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 60 80"
                  className="w-full h-full fill-none stroke-[#B65F3C]"
                  strokeWidth="1.2"
                >
                  <line x1="20" y1="10" x2="40" y2="10" />
                  <line x1="16" y1="20" x2="44" y2="20" />
                  <line x1="12" y1="35" x2="48" y2="35" />
                  <line x1="8" y1="52" x2="52" y2="52" />
                  <line x1="4" y1="72" x2="56" y2="72" />
                  <path d="M30 4 L18 72 M30 4 L42 72" strokeDasharray="2 2" stroke="#4285F4" />
                  <circle cx="30" cy="4" r="2" fill="#FBBC04" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#292E33]">
          {/* Col 1: DevFest Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#B65F3C] mb-4">
              // Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-mono text-[#9DA4AA]">
              <li>
                <Link href="/#why-devfest" className="hover:text-[#F5F3EE] transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#tracks" className="hover:text-[#F5F3EE] transition-colors">
                  Tracks
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-[#F5F3EE] transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-[#F5F3EE] transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/venue" className="hover:text-[#F5F3EE] transition-colors">
                  Venue & Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Community & Chapters */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#4285F4] mb-4">
              // Community
            </h3>
            <ul className="space-y-2.5 text-sm font-mono text-[#9DA4AA]">
              <li>
                <Link href="/community" className="hover:text-[#F5F3EE] transition-colors">
                  About GDG Madurai
                </Link>
              </li>
              <li>
                <Link href="/memories" className="hover:text-[#F5F3EE] transition-colors">
                  Memories Archive
                </Link>
              </li>
              <li>
                <Link href="/#interactive" className="hover:text-[#F5F3EE] transition-colors">
                  Digital Kolam Lab
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="hover:text-[#F5F3EE] transition-colors">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tracks & Tech */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#34A853] mb-4">
              // Technologies
            </h3>
            <ul className="space-y-2.5 text-sm font-mono text-[#9DA4AA]">
              <li>Generative AI & Gemini</li>
              <li>Google Cloud & Vertex AI</li>
              <li>Modern Web & Chrome</li>
              <li>Android & Flutter</li>
              <li>Firebase & Supabase</li>
            </ul>
          </div>

          {/* Col 4: Stay Connected */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#FBBC04] mb-4">
              // Connect
            </h3>
            <p className="text-xs font-sans text-[#9DA4AA] mb-4 leading-relaxed">
              Google Developer Group Madurai is an independent community passionate about
              technology, learning, and developer culture.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded border border-[#292E33] bg-[#111417] flex items-center justify-center text-[#9DA4AA] hover:text-[#4285F4] hover:border-[#4285F4] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded border border-[#292E33] bg-[#111417] flex items-center justify-center text-[#9DA4AA] hover:text-white hover:border-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded border border-[#292E33] bg-[#111417] flex items-center justify-center text-[#9DA4AA] hover:text-[#4285F4] hover:border-[#4285F4] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded border border-[#292E33] bg-[#111417] flex items-center justify-center text-[#9DA4AA] hover:text-[#EA4335] hover:border-[#EA4335] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Brand Safety */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9DA4AA]">
          <div className="flex items-center gap-2">
            <span>© 2026 GDG Madurai.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>
          <div className="text-center md:text-right max-w-xl text-[11px] text-[#6E767E]">
            GDG Madurai is an independent developer group; our activities and the opinions expressed
            on this site should in no way be linked to Google, the corporation.
          </div>
        </div>
      </Container>
    </footer>
  );
};
