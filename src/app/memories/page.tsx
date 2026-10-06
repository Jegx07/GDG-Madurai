import React from "react";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { MemoriesGallery } from "@/components/sections/MemoriesGallery";

export const metadata = {
  title: "Memories Archive | GDG Madurai DevFest 2026",
  description: "Browse photographs and documented milestones from past GDG Madurai gatherings and DevFests.",
};

export default function MemoriesPage() {
  return (
    <div className="py-12 bg-[#0B0D0F]">
      <Container size="wide" className="mb-8">
        <TechnicalLabel variant="terracotta" code="HISTORICAL ARCHIVE">
          CINEMATIC RECORD
        </TechnicalLabel>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mt-3">
          MEMORIES & MOMENTS
        </h1>
        <p className="text-base text-[#9DA4AA] font-sans max-w-2xl mt-2">
          From late-night code hackathons to auditorium keynotes, explore the visual archive of our developer family.
        </p>
      </Container>
      <MemoriesGallery />
    </div>
  );
}
