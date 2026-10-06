import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, MapPin, Share2 } from "lucide-react";

interface SpeakerProps {
  params: Promise<{ slug: string }>;
}

export default async function SpeakerProfilePage({ params }: SpeakerProps) {
  const { slug } = await params;

  return (
    <div className="py-12 bg-[#0B0D0F]">
      <Container size="tight">
        <Link
          href="/speakers"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9DA4AA] hover:text-[#F5F3EE] mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO SPEAKERS DIRECTORY</span>
        </Link>

        <div className="bg-[#111417] border border-[#292E33] p-8 rounded-[2px]">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[#0B0D0F] border border-[#292E33] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 80 80" className="w-20 h-20 stroke-[#B65F3C] fill-none" strokeWidth="1.2">
                <circle cx="40" cy="30" r="14" />
                <path d="M15 70 C15 50, 65 50, 65 70" />
              </svg>
            </div>

            <div>
              <TechnicalLabel variant="terracotta" code="DOSSIER">
                SPEAKER PROFILE
              </TechnicalLabel>
              <h1 className="text-3xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mt-3">
                [SPEAKER_NAME // GDE]
              </h1>
              <p className="text-sm font-mono text-[#4285F4] mt-1">
                Google Developer Expert • [ORGANIZATION]
              </p>
              <p className="text-xs font-sans text-[#9DA4AA] mt-3 leading-relaxed">
                Staff engineer specializing in distributed systems, high-efficiency cloud runtimes,
                and large-scale multimodal AI applications. Mentoring developer communities across Asia.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#292E33]">
            <h2 className="text-xs font-mono uppercase text-[#B65F3C] mb-2">
              // PRESENTING SESSION
            </h2>
            <h3 className="text-xl font-bold font-display uppercase text-[#F5F3EE]">
              Multimodal Gemini Architectures & Autonomous Agents
            </h3>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-[#9DA4AA]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#B65F3C]" /> OCTOBER 2026
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#4285F4]" /> Auditorium Main Stage
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
