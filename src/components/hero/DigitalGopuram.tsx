"use client";

import React, { useState, useEffect, useRef } from "react";

export const DigitalGopuram: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !("ontouchstart" in window));
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Parallax multipliers from specification:
  // Architecture = 0.2x
  // Particles = 0.4x
  // Network = 0.6x
  const archX = mouseOffset.x * 12;
  const archY = mouseOffset.y * 12;
  const partX = mouseOffset.x * 24;
  const partY = mouseOffset.y * 24;
  const netX = mouseOffset.x * 36;
  const netY = mouseOffset.y * 36;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center overflow-hidden select-none"
      aria-label="Digital Gopuram architectural visualization"
    >
      {/* Background ambient glow - Terracotta & GDG Blue */}
      <div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#B65F3C]/15 blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${archX * 1.5}px, ${archY * 1.5}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#4285F4]/10 blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${-archX}px, ${-archY}px)`,
        }}
      />

      {/* Layer 3: Network Constellation (Parallax 0.6x) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${netX}px, ${netY}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 600 700"
          className="w-full h-full max-w-[550px] opacity-40"
          fill="none"
        >
          {/* Constellation lines connecting community nodes */}
          <line x1="300" y1="80" x2="210" y2="220" stroke="#4285F4" strokeDasharray="3 3" />
          <line x1="300" y1="80" x2="390" y2="220" stroke="#4285F4" strokeDasharray="3 3" />
          <line x1="210" y1="220" x2="160" y2="400" stroke="#34A853" strokeDasharray="3 3" />
          <line x1="390" y1="220" x2="440" y2="400" stroke="#34A853" strokeDasharray="3 3" />
          <line x1="160" y1="400" x2="120" y2="580" stroke="#FBBC04" strokeDasharray="3 3" />
          <line x1="440" y1="400" x2="480" y2="580" stroke="#FBBC04" strokeDasharray="3 3" />

          {/* Glowing node vertices */}
          <circle cx="210" cy="220" r="3" fill="#4285F4" />
          <circle cx="390" cy="220" r="3" fill="#4285F4" />
          <circle cx="160" cy="400" r="3.5" fill="#34A853" />
          <circle cx="440" cy="400" r="3.5" fill="#34A853" />
          <circle cx="120" cy="580" r="4" fill="#FBBC04" />
          <circle cx="480" cy="580" r="4" fill="#FBBC04" />
        </svg>
      </div>

      {/* Layer 2: Floating Data Particles (Parallax 0.4x) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${partX}px, ${partY}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 600 700"
          className="w-full h-full max-w-[550px] opacity-70"
          fill="none"
        >
          {/* Subtle Kolam code points */}
          <circle cx="300" cy="40" r="3" fill="#FBBC04" className="animate-pulse" />
          <circle cx="270" cy="150" r="2" fill="#B65F3C" />
          <circle cx="330" cy="150" r="2" fill="#B65F3C" />
          <circle cx="240" cy="280" r="2" fill="#4285F4" />
          <circle cx="360" cy="280" r="2" fill="#4285F4" />
          <circle cx="190" cy="460" r="2.5" fill="#EA4335" />
          <circle cx="410" cy="460" r="2.5" fill="#EA4335" />

          {/* Micro binary data markers */}
          <text x="240" y="325" fill="#9DA4AA" fontSize="8" fontFamily="monospace" opacity="0.6">
            01001101
          </text>
          <text x="325" y="325" fill="#9DA4AA" fontSize="8" fontFamily="monospace" opacity="0.6">
            9.9252°N
          </text>
          <text x="180" y="505" fill="#9DA4AA" fontSize="8" fontFamily="monospace" opacity="0.6">
            BUILD // MDR
          </text>
          <text x="365" y="505" fill="#9DA4AA" fontSize="8" fontFamily="monospace" opacity="0.6">
            78.1198°E
          </text>
        </svg>
      </div>

      {/* Layer 1: Core Architectural Geometry - Digital Gopuram (Parallax 0.2x) */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${archX}px, ${archY}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 600 700"
          className="w-full h-full max-w-[550px] drop-shadow-[0_0_25px_rgba(182,95,60,0.25)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id="gopuramGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FBBC04" />
              <stop offset="30%" stopColor="#B65F3C" />
              <stop offset="70%" stopColor="#4285F4" />
              <stop offset="100%" stopColor="#34A853" />
            </linearGradient>
            <linearGradient id="vaigaiRiver" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4285F4" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#4285F4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4285F4" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Peak Kalasams (Finials) - Abstracted to 5 digital beacons */}
          <path d="M260 55 L260 45 L263 42 L260 42" stroke="#FBBC04" strokeWidth="1.5" />
          <path d="M280 50 L280 38 L283 35 L280 35" stroke="#FBBC04" strokeWidth="1.5" />
          <path d="M300 45 L300 30 L304 26 L300 26" stroke="#FBBC04" strokeWidth="2" />
          <path d="M320 50 L320 38 L323 35 L320 35" stroke="#FBBC04" strokeWidth="1.5" />
          <path d="M340 55 L340 45 L343 42 L340 42" stroke="#FBBC04" strokeWidth="1.5" />
          
          <line x1="250" y1="55" x2="350" y2="55" stroke="#FBBC04" strokeWidth="2" />

          {/* Tier 1 (Apex Chamber) */}
          <polygon points="260,55 340,55 350,85 250,85" stroke="#B65F3C" strokeWidth="1.5" />
          <line x1="275" y1="55" x2="275" y2="85" stroke="#B65F3C" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="300" y1="55" x2="300" y2="85" stroke="#4285F4" strokeWidth="1.5" />
          <line x1="325" y1="55" x2="325" y2="85" stroke="#B65F3C" strokeWidth="1" strokeDasharray="2 2" />

          {/* Tier 2 */}
          <polygon points="245,90 355,90 370,130 230,130" stroke="#B65F3C" strokeWidth="1.5" />
          <circle cx="300" cy="110" r="4" stroke="#4285F4" strokeWidth="1.5" />
          <line x1="260" y1="90" x2="250" y2="130" stroke="#B65F3C" strokeWidth="1" />
          <line x1="340" y1="90" x2="350" y2="130" stroke="#B65F3C" strokeWidth="1" />

          {/* Tier 3 */}
          <polygon points="225,135 375,135 390,185 210,185" stroke="#B65F3C" strokeWidth="1.5" />
          <rect x="285" y="145" width="30" height="25" stroke="#4285F4" strokeWidth="1.2" />
          <line x1="240" y1="135" x2="230" y2="185" stroke="#292E33" strokeWidth="1" />
          <line x1="360" y1="135" x2="370" y2="185" stroke="#292E33" strokeWidth="1" />

          {/* Tier 4 */}
          <polygon points="205,190 395,190 415,250 185,250" stroke="#B65F3C" strokeWidth="1.8" />
          {/* Architectural niche matrix */}
          <rect x="235" y="205" width="20" height="30" stroke="#9DA4AA" strokeWidth="1" />
          <rect x="270" y="202" width="22" height="35" stroke="#4285F4" strokeWidth="1.2" />
          <rect x="308" y="202" width="22" height="35" stroke="#4285F4" strokeWidth="1.2" />
          <rect x="345" y="205" width="20" height="30" stroke="#9DA4AA" strokeWidth="1" />

          {/* Tier 5 */}
          <polygon points="180,255 420,255 440,325 160,325" stroke="#B65F3C" strokeWidth="1.8" />
          <line x1="160" y1="290" x2="440" y2="290" stroke="#292E33" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M220 325 L220 270 M260 325 L260 270 M300 325 L300 270 M340 325 L340 270 M380 325 L380 270" stroke="#292E33" strokeWidth="1" />

          {/* Tier 6 */}
          <polygon points="155,330 445,330 470,410 130,410" stroke="#B65F3C" strokeWidth="2" />
          {/* Central Gopuram Gateway axis */}
          <line x1="300" y1="330" x2="300" y2="410" stroke="#EA4335" strokeWidth="1.5" />
          <polygon points="280,410 300,380 320,410" stroke="#FBBC04" strokeWidth="1.2" />

          {/* Tier 7 - Lower Gateway Tier */}
          <polygon points="125,415 475,415 500,505 100,505" stroke="#B65F3C" strokeWidth="2" />
          <line x1="100" y1="460" x2="500" y2="460" stroke="#292E33" strokeWidth="1" />

          {/* Tier 8 - Base & Pitham */}
          <polygon points="95,510 505,510 530,600 70,600" stroke="#B65F3C" strokeWidth="2" />
          {/* Portal arch */}
          <path
            d="M250 600 L250 540 Q300 515 350 540 L350 600"
            stroke="#4285F4"
            strokeWidth="2.5"
            fill="rgba(66,133,244,0.06)"
          />

          {/* Vaigai River flow lines at foundation */}
          <path
            d="M30 630 C150 610, 220 645, 300 625 C380 605, 450 640, 570 620"
            stroke="url(#vaigaiRiver)"
            strokeWidth="3"
            fill="none"
            className="animate-flow-vaigai"
          />
          <path
            d="M40 645 C160 625, 230 660, 310 640 C390 620, 460 655, 560 635"
            stroke="url(#vaigaiRiver)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            fill="none"
          />
        </svg>
      </div>

      {/* Subtle corner coordinate badges */}
      <div className="absolute bottom-2 left-4 text-[10px] font-mono text-[#9DA4AA]/60 hidden sm:block">
        GOPURAM_DNA // 9 TIERS
      </div>
      <div className="absolute bottom-2 right-4 text-[10px] font-mono text-[#9DA4AA]/60 hidden sm:block">
        VAIGAI_FLOW // SYSTEM_READY
      </div>
    </div>
  );
};
