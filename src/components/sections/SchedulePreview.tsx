"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TechnicalLabel } from "@/components/ui/TechnicalLabel";
import { Clock, MapPin, Calendar, ArrowUpRight, Filter } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface Session {
  id: string;
  time: string;
  duration: string;
  track: string;
  badgeVariant: "blue" | "red" | "yellow" | "green" | "terracotta" | "dark";
  title: string;
  speaker: string;
  room: string;
  type: "Keynote" | "Deep Dive" | "Workshop" | "Panel" | "Networking";
}

const SCHEDULE_DATA: Session[] = [
  {
    id: "s-1",
    time: "08:30 - 09:30 IST",
    duration: "60 MIN",
    track: "CHECK-IN",
    badgeVariant: "dark",
    title: "Registration, Morning Filter Coffee & Community Reception",
    speaker: "GDG Madurai Organizing Team",
    room: "Vaigai Grand Atrium",
    type: "Networking",
  },
  {
    id: "s-2",
    time: "09:30 - 10:15 IST",
    duration: "45 MIN",
    track: "KEYNOTE",
    badgeVariant: "terracotta",
    title: "Build From Madurai: Architectural Heritage to Global AI Systems",
    speaker: "[KEYNOTE_SPEAKER // GDE]",
    room: "Auditorium Main Stage (Gopuram Hall)",
    type: "Keynote",
  },
  {
    id: "s-3",
    time: "10:30 - 11:30 IST",
    duration: "60 MIN",
    track: "AI & GEMINI",
    badgeVariant: "red",
    title: "Building Production Multi-Agent Workflows with Gemini 2.0 & Genkit",
    speaker: "[SPEAKER_NAME // AI ARCHITECT]",
    room: "Auditorium Main Stage (Gopuram Hall)",
    type: "Deep Dive",
  },
  {
    id: "s-4",
    time: "10:30 - 11:30 IST",
    duration: "60 MIN",
    track: "CLOUD & GKE",
    badgeVariant: "blue",
    title: "High-Availability Distributed Kubernetes Architecture on Google Cloud",
    speaker: "[SPEAKER_NAME // CLOUD ENGINEER]",
    room: "Hall B (Vaigai Tech Room)",
    type: "Deep Dive",
  },
  {
    id: "s-5",
    time: "11:45 - 12:45 IST",
    duration: "60 MIN",
    track: "ANDROID & KMP",
    badgeVariant: "green",
    title: "Declarative UI Masterclass: Jetpack Compose & Kotlin Multiplatform",
    speaker: "[SPEAKER_NAME // ANDROID SPECIALIST]",
    room: "Hall B (Vaigai Tech Room)",
    type: "Workshop",
  },
  {
    id: "s-6",
    time: "12:45 - 14:00 IST",
    duration: "75 MIN",
    track: "LUNCH & COMMUNITY",
    badgeVariant: "yellow",
    title: "Traditional Madurai Feast & Open Source Showcase Lounge",
    speaker: "All Attendees & Mentors",
    room: "Dining Pavilion",
    type: "Networking",
  },
  {
    id: "s-7",
    time: "14:00 - 15:00 IST",
    duration: "60 MIN",
    track: "WEB PLATFORM",
    badgeVariant: "blue",
    title: "Sub-Second Web Vitals: Next.js 15, Edge Runtimes & Chrome APIs",
    speaker: "[SPEAKER_NAME // WEB ENGINEER]",
    room: "Auditorium Main Stage (Gopuram Hall)",
    type: "Deep Dive",
  },
  {
    id: "s-8",
    time: "15:15 - 16:30 IST",
    duration: "75 MIN",
    track: "INTERACTIVE LAB",
    badgeVariant: "terracotta",
    title: "Live Hack: Algorithmic Kolam Procedural Generators on WebGL/Canvas",
    speaker: "Creative Coding Collective",
    room: "Innovation Code Lab",
    type: "Workshop",
  },
  {
    id: "s-9",
    time: "16:45 - 17:30 IST",
    duration: "45 MIN",
    track: "CLOSING",
    badgeVariant: "terracotta",
    title: "DevFest 2026 Awards, Community Milestones & The Road Ahead",
    speaker: "GDG Madurai Community Leads",
    room: "Auditorium Main Stage (Gopuram Hall)",
    type: "Keynote",
  },
];

export const SchedulePreview: React.FC = () => {
  const [filterTrack, setFilterTrack] = useState<string>("ALL");

  const tracks = ["ALL", "KEYNOTE", "AI & GEMINI", "CLOUD & GKE", "ANDROID & KMP", "WEB PLATFORM"];

  const filteredSessions =
    filterTrack === "ALL"
      ? SCHEDULE_DATA
      : SCHEDULE_DATA.filter((s) => s.track.includes(filterTrack) || s.track === filterTrack);

  return (
    <Section
      id="schedule"
      chapter="CHAPTER 06"
      number="06.0"
      title="FESTIVAL SCHEDULE"
      subtitle="A meticulously engineered single-day conference spanning visionary keynotes, parallel deep dives, and code laboratories."
    >
      <Container size="wide">
        {/* Track Filter Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#292E33]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono text-[#9DA4AA] mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> FILTER:
            </span>
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setFilterTrack(track)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase border rounded-[2px] transition-colors ${
                  filterTrack === track
                    ? "bg-[#B65F3C] border-[#B65F3C] text-white"
                    : "bg-[#111417] border-[#292E33] text-[#9DA4AA] hover:text-[#F5F3EE] hover:border-[#4285F4]"
                }`}
              >
                {track}
              </button>
            ))}
          </div>

          <Link
            href="/schedule"
            className="text-xs font-mono text-[#B65F3C] hover:underline flex items-center gap-1"
          >
            DETAILED MULTI-TRACK MATRIX <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Schedule Timeline Grid */}
        <div className="space-y-4">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="group bg-[#111417] border border-[#292E33] p-5 sm:p-6 transition-all duration-200 hover:border-[#4285F4] rounded-[2px] relative"
            >
              {/* Left timeline accent */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                {/* Time & Duration (3 Cols) */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between gap-2 border-b lg:border-b-0 lg:border-r border-[#292E33] pb-3 lg:pb-0 lg:pr-6">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-mono font-bold text-[#F5F3EE]">
                    <Clock className="w-4 h-4 text-[#B65F3C]" />
                    <span>{session.time}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9DA4AA]">
                    DURATION: {session.duration}
                  </span>
                </div>

                {/* Session Content (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant={session.badgeVariant}>{session.track}</Badge>
                    <span className="text-[11px] font-mono text-[#9DA4AA]">
                      // {session.type}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold font-display text-[#F5F3EE] group-hover:text-white transition-colors mb-2">
                    {session.title}
                  </h4>

                  <div className="text-xs sm:text-sm font-mono text-[#9DA4AA]">
                    Speaker: <span className="text-[#F5F3EE] font-medium">{session.speaker}</span>
                  </div>
                </div>

                {/* Room & Actions (2 Cols) */}
                <div className="lg:col-span-2 flex flex-col lg:items-end justify-between gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#292E33]">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#9DA4AA]">
                    <MapPin className="w-3.5 h-3.5 text-[#34A853]" />
                    <span className="text-right">{session.room}</span>
                  </div>

                  <button
                    onClick={() =>
                      alert(`Session added to calendar: ${session.title}`)
                    }
                    className="inline-flex items-center gap-1 text-[11px] font-mono uppercase text-[#B65F3C] hover:text-[#CF7E5D] transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>+ Calendar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
