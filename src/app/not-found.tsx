import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-[#0B0D0F] overflow-hidden py-16">
      {/* Abstract Madurai street/network map background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#B65F3C_1.5px,transparent_1.5px)] bg-[size:28px_28px]"
        aria-hidden="true"
      />

      <Container size="tight" className="relative z-10 text-center flex flex-col items-center">
        <TechnicalLabel variant="red" code="ERROR 404">
          ROUTE NOT FOUND
        </TechnicalLabel>

        <h1 className="mt-4 text-5xl sm:text-7xl font-extrabold font-display uppercase tracking-tight text-[#F5F3EE]">
          LOST IN MADURAI.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-[#9DA4AA] font-sans max-w-lg">
          The requested coordinate does not exist in our network routing table or has moved along the Vaigai corridor.
        </p>

        {/* Technical CLI Box */}
        <div className="my-8 w-full max-w-md bg-[#07080A] border border-[#292E33] p-4 text-left font-mono text-xs text-[#9DA4AA] rounded-[2px]">
          <div className="text-[#B65F3C]">$ find route --dest requested_url</div>
          <div className="text-[#EA4335] mt-1">SEARCHING... ROUTE NOT FOUND [ERR_404_OFF_GRID]</div>
          <div className="text-[#4285F4] mt-2">$ cd /home &amp;&amp; reroute --target &quot;devfest-2026&quot;</div>
          <div className="text-[#34A853] mt-1">RECALCULATING CONCENTRIC VELI STREET TOPOLOGY...</div>
        </div>

        <Link href="/">
          <Button variant="terracotta" size="lg">
            Return to Core Grid (Home)
          </Button>
        </Link>
      </Container>
    </div>
  );
}
