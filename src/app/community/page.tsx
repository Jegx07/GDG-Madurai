import React from "react";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { CommunityStory } from "@/components/sections/CommunityStory";

export const metadata = {
  title: "Community | GDG Madurai DevFest 2026",
  description: "Learn about GDG Madurai, our mission, chapters, and year-round developer empowerment programs.",
};

export default function CommunityPage() {
  return (
    <div className="py-12 bg-[#0B0D0F]">
      <Container size="wide" className="mb-8">
        <TechnicalLabel variant="terracotta" code="CHAPTERS & LEADERSHIP">
          MADURAI DEVELOPER NETWORK
        </TechnicalLabel>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mt-3">
          ABOUT GDG MADURAI
        </h1>
        <p className="text-base text-[#9DA4AA] font-sans max-w-2xl mt-2">
          An independent developer collective cultivating engineering talent, open-source
          contributions, and regional technical innovation.
        </p>
      </Container>
      <CommunityStory />
    </div>
  );
}
