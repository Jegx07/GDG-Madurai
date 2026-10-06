import React from "react";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { VenueSection } from "@/components/sections/VenueSection";

export const metadata = {
  title: "Venue & Travel Guide | GDG Madurai DevFest 2026",
  description: "Complete transit, airport, railway, and accommodation directions for DevFest Madurai 2026.",
};

export default function VenuePage() {
  return (
    <div className="py-12 bg-[#0B0D0F]">
      <Container size="wide" className="mb-8">
        <TechnicalLabel variant="terracotta" code="WAYFINDING & TRANSIT">
          MADURAI NAVIGATION
        </TechnicalLabel>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mt-3">
          VENUE & TRAVEL GUIDE
        </h1>
        <p className="text-base text-[#9DA4AA] font-sans max-w-2xl mt-2">
          Everything you need to navigate Madurai, reach the conference auditorium, and settle in smoothly.
        </p>
      </Container>
      <VenueSection />
    </div>
  );
}
