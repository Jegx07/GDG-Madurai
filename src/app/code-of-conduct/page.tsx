import React from "react";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

export const metadata = {
  title: "Code of Conduct | GDG Madurai DevFest 2026",
  description: "Our community standards, safety guidelines, and anti-harassment policy for GDG Madurai DevFest 2026.",
};

export default function CodeOfConductPage() {
  return (
    <div className="py-16 bg-[#0B0D0F]">
      <Container size="tight">
        <TechnicalLabel variant="terracotta" code="COMMUNITY INTEGRITY">
          ETHICAL STANDARDS
        </TechnicalLabel>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE] mt-3 mb-6">
          COMMUNITY CODE OF CONDUCT
        </h1>

        <div className="space-y-6 text-sm sm:text-base font-sans text-[#9DA4AA] leading-relaxed border-t border-[#292E33] pt-6">
          <p>
            GDG Madurai is dedicated to providing a safe, inclusive, welcoming, and harassment-free
            experience for everyone, regardless of gender identity, sexual orientation, disability,
            physical appearance, race, ethnicity, age, religion, or technical background.
          </p>

          <h2 className="text-xl font-bold font-display uppercase text-[#F5F3EE] pt-4">
            Expected Behavior
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-[#F5F3EE]/90">
            <li>Be respectful, empathetic, and constructive in all technical dialogues.</li>
            <li>Value the diversity of opinions, perspectives, and learning backgrounds.</li>
            <li>Maintain mindful language and professional decorum across all talks, workshops, and lab floors.</li>
            <li>Respect the physical and digital privacy of speakers and fellow builders.</li>
          </ul>

          <h2 className="text-xl font-bold font-display uppercase text-[#F5F3EE] pt-4">
            Zero-Tolerance Policy
          </h2>
          <p>
            Harassment in any form—including offensive verbal comments, deliberate intimidation,
            unauthorized photography, disruption of presentations, or inappropriate physical
            contact—will not be tolerated. Violators will be sanctioned or expelled without refund
            at the sole discretion of the conference organizers.
          </p>

          <div className="p-4 bg-[#111417] border border-[#292E33] rounded-[2px] mt-8 text-xs font-mono text-[#9DA4AA]">
            <div className="text-[#B65F3C] font-semibold mb-1">INCIDENT REPORTING</div>
            <div>
              If you experience or witness an incident, notify an event organizer wearing the official
              crew lanyard or email directly at:{" "}
              <a href="mailto:conduct@gdgmadurai.in" className="text-[#4285F4] underline">
                conduct@gdgmadurai.in
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
