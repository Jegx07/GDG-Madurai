"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const FinalRegistrationCTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    try {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
    } catch (err) {}
  };

  return (
    <section id="register" className="relative py-24 lg:py-32 bg-[#0B0D0F] border-t border-[#292E33] overflow-hidden">
      {/* Background Architectural Vector Beacons */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#B65F3C_1.5px,transparent_1.5px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-[#B65F3C]/20 via-[#4285F4]/10 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <TechnicalLabel variant="terracotta" code="PHASE FINAL">
            OCTOBER 2026 // MADURAI
          </TechnicalLabel>

          <h2 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F3EE] uppercase font-display leading-[0.95]">
            YOUR NEXT BUILD <br />
            <span className="text-[#B65F3C]">STARTS HERE.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-[#9DA4AA] font-sans max-w-2xl leading-relaxed">
            Be part of Southern Tamil Nadu’s defining software festival. Connect with 500+
            architects, clone cutting-edge repositories, and build from Madurai.
          </p>

          {/* Quick Registration / Priority Notification Form */}
          <div className="mt-10 w-full max-w-md">
            {subscribed ? (
              <div className="p-4 bg-[#111417] border border-[#34A853] rounded-[2px] flex items-center justify-center gap-2 text-sm font-mono text-[#34A853]">
                <CheckCircle2 className="w-5 h-5" />
                <span>YOU'RE ON THE PRIORITY VIP BUILD LIST!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="developer@domain.com"
                  className="flex-1 px-4 py-3 bg-[#111417] border border-[#292E33] rounded-[2px] text-[#F5F3EE] font-mono text-xs focus:outline-none focus:border-[#4285F4] placeholder:text-[#6E767E]"
                  aria-label="Email address for priority registration"
                />
                <Button variant="terracotta" size="md" type="submit" withArrow>
                  Register Now
                </Button>
              </form>
            )}

            <div className="mt-3 flex items-center justify-center gap-4 text-[10px] font-mono text-[#9DA4AA]">
              <span>NO SPAM</span>
              <span>•</span>
              <span>EARLY-BIRD TICKETS</span>
              <span>•</span>
              <span>IN-PERSON PASSES</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
