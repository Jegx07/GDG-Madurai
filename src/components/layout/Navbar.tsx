"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";

const NAV_LINKS = [
  { href: "/#why-devfest", label: "Overview" },
  { href: "/#tracks", label: "Tracks" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/#interactive", label: "Lab" },
  { href: "/community", label: "Community" },
  { href: "/venue", label: "Venue" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0D0F]/90 backdrop-blur-md border-b border-[#292E33] shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]"
          >
            {/* Architectural Gopuram mark */}
            <div className="relative w-8 h-8 flex items-center justify-center border border-[#B65F3C]/60 bg-[#171B1F] group-hover:border-[#4285F4] transition-colors">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-none stroke-[#B65F3C] group-hover:stroke-[#4285F4] transition-colors"
                strokeWidth="1.5"
              >
                <path d="M12 2L4 20H20L12 2Z" />
                <path d="M8 12H16" />
                <path d="M6 16H18" />
                <circle cx="12" cy="7" r="1" fill="#4285F4" stroke="none" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm sm:text-base tracking-wider text-[#F5F3EE]">
                  GDG MADURAI
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B65F3C]">
                DevFest 2026 // 9.92°N 78.11°E
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors relative ${
                    isActive
                      ? "text-[#F5F3EE] font-semibold"
                      : "text-[#9DA4AA] hover:text-[#F5F3EE]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B65F3C]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <TechnicalLabel variant="default" dot={false} className="hidden xl:inline-flex">
              [OCTOBER 2026]
            </TechnicalLabel>

            <Link href="/#register">
              <Button variant="terracotta" size="sm" withArrow>
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/#register" className="sm:hidden">
              <Button variant="terracotta" size="sm">
                Register
              </Button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[#292E33] bg-[#111417] text-[#9DA4AA] hover:text-[#F5F3EE] focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-[#0B0D0F]/98 border-b border-[#292E33] p-6 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-[#292E33] flex justify-between items-center">
              <span className="text-xs font-mono text-[#9DA4AA]">
                GDG MADURAI // DEVFEST NAVIGATION
              </span>
              <TechnicalLabel variant="terracotta" size="sm">
                9.92° N
              </TechnicalLabel>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-mono uppercase tracking-wider text-[#F5F3EE] hover:bg-[#171B1F] rounded transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#9DA4AA]" />
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#292E33] flex flex-col gap-3">
              <Link href="/#register" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="terracotta" className="w-full">
                  Register for DevFest 2026
                </Button>
              </Link>
              <div className="text-[11px] font-mono text-center text-[#9DA4AA]">
                BUILD FROM MADURAI. CONNECTED GLOBALLY.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
