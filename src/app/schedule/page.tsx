import React from "react";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { SchedulePreview } from "@/components/sections/SchedulePreview";

export const metadata = {
  title: "Schedule | GDG Madurai DevFest 2026",
  description: "Explore the comprehensive multi-track engineering schedule for GDG Madurai DevFest 2026.",
};

export default function SchedulePage() {
  return (
    <div className="py-12 bg-[#0B0D0F]">
      <Container size="wide" className="mb-8">
        <TechnicalLabel variant="terracotta" code="PROGRAMME // 2026">
          COMPLETE TIMELINE
        </TechnicalLabel>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mt-3">
          FULL CONFERENCE SCHEDULE
        </h1>
        <p className="text-base text-[#9DA4AA] font-sans max-w-2xl mt-2">
          Plan your DevFest day across Keynote, AI/Gemini, Google Cloud, Android, and Modern Web tracks.
        </p>
      </Container>
      <SchedulePreview />
    </div>
  );
}
