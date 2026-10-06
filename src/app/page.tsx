import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { WhyDevFest } from "@/components/sections/WhyDevFest";
import { MaduraiTechTransformation } from "@/components/sections/MaduraiTechTransformation";
import { EventTracks } from "@/components/sections/EventTracks";
import { FeaturedSpeakers } from "@/components/sections/FeaturedSpeakers";
import { SchedulePreview } from "@/components/sections/SchedulePreview";
import { CommunityStory } from "@/components/sections/CommunityStory";
import { MemoriesGallery } from "@/components/sections/MemoriesGallery";
import { InteractiveLab } from "@/components/sections/InteractiveLab";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ParticipationSection } from "@/components/sections/ParticipationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalRegistrationCTA } from "@/components/sections/FinalRegistrationCTA";

export default function Home() {
  return (
    <>
      {/* 02 & 03: Hero & Countdown */}
      <HeroSection />

      {/* 04: Why DevFest */}
      <WhyDevFest />

      {/* 05: Madurai × Technology (Scroll Transformation) */}
      <MaduraiTechTransformation />

      {/* 06: Event Tracks */}
      <EventTracks />

      {/* 07: Featured Speakers */}
      <FeaturedSpeakers />

      {/* 08: Schedule Preview */}
      <SchedulePreview />

      {/* 09 & 10: Community & Timeline */}
      <CommunityStory />

      {/* 11: Memories Archive */}
      <MemoriesGallery />

      {/* 12: Interactive Experiences (Terminal, Kolam, Passport) */}
      <InteractiveLab />

      {/* 13: Partners */}
      <PartnersSection />

      {/* 14: Participation (Speaker, Volunteer, Partner) */}
      <ParticipationSection />

      {/* 15: FAQ */}
      <FAQSection />

      {/* 16: Final Registration CTA */}
      <FinalRegistrationCTA />
    </>
  );
}
