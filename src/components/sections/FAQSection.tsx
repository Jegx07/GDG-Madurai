"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "REGISTRATION",
    question: "When do DevFest Madurai 2026 registrations open and what is the cost?",
    answer:
      "Registrations will open in phases via the official portal. Ticket tiers, student concessions, and early-bird passes will be announced shortly. All tickets include conference access, developer swag, technical code labs, and catered meals.",
  },
  {
    id: "faq-2",
    category: "VENUE",
    question: "Where is the venue and how do I reach from Madurai Junction or Airport?",
    answer:
      "The conference will take place at a premier convention auditorium in Madurai. The venue is easily accessible via auto, cab, or city bus from Madurai Junction (MDU) railway station and Madurai Airport (IXM). Comprehensive transit directions are detailed on our Venue page.",
  },
  {
    id: "faq-3",
    category: "STUDENTS",
    question: "Are there dedicated student tickets and campus group discounts?",
    answer:
      "Yes. GDG Madurai provides subsidized registration for active college students. Bring your valid college identification for badge check-in on the morning of the event.",
  },
  {
    id: "faq-4",
    category: "SCHEDULE",
    question: "Will all tracks happen simultaneously? Can I switch between sessions?",
    answer:
      "Yes, after the morning opening keynote, the conference splits into parallel tracks across AI/Gemini, Google Cloud, Modern Web, and Mobile. Attendees are free to move between halls based on their technical interests.",
  },
  {
    id: "faq-5",
    category: "FOOD & DRINK",
    question: "Are lunch and refreshments provided during the festival?",
    answer:
      "Yes. Your ticket includes morning South Indian filter coffee, a traditional Madurai lunch feast, and evening high tea with refreshments.",
  },
  {
    id: "faq-6",
    category: "CERTIFICATES",
    question: "Will attendees receive a certificate of participation?",
    answer:
      "Yes! Verified attendees who check in at the registration desk will receive an official verifiable digital credential from GDG Madurai recognizing their DevFest 2026 participation.",
  },
  {
    id: "faq-7",
    category: "CODE OF CONDUCT",
    question: "What is the community code of conduct?",
    answer:
      "GDG Madurai is committed to providing a harassment-free, welcoming, and inclusive conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, race, or religion. Our full Code of Conduct is strictly enforced across all halls.",
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section
      id="faq"
      chapter="CHAPTER 13"
      number="13.0"
      title="FREQUENTLY ANSWERED SPECS"
      subtitle="Clear technical and logistical details so you can prepare for an uninterrupted conference experience."
      variant="surface"
    >
      <Container size="tight">
        <div className="space-y-3">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#0B0D0F] border border-[#292E33] rounded-[2px] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#111417]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#B65F3C] uppercase px-1.5 py-0.5 border border-[#B65F3C]/40 bg-[#B65F3C]/10 rounded-[2px] shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#F5F3EE] uppercase tracking-wide">
                      {faq.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-[#9DA4AA] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#B65F3C]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm font-sans text-[#9DA4AA] leading-relaxed border-t border-[#292E33]/60 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help footer */}
        <div className="mt-8 pt-6 border-t border-[#292E33] flex items-center justify-between text-xs font-mono text-[#9DA4AA]">
          <div className="flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#4285F4]" />
            <span>Have a specific query?</span>
          </div>
          <a
            href="mailto:contact@gdgmadurai.in"
            className="text-[#B65F3C] hover:underline flex items-center gap-1"
          >
            CONTACT ORGANIZERS <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </Section>
  );
};
