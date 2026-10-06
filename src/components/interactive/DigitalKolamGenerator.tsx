"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { RefreshCw, RotateCcw, Sparkles } from "lucide-react";

export const DigitalKolamGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [symmetry, setSymmetry] = useState<number>(8);
  const [accent, setAccent] = useState<string>("#B65F3C");
  const [seed, setSeed] = useState<number>(42);

  const drawKolam = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;

    ctx.clearRect(0, 0, width, height);

    // Draw background subtle dot grid (Pulli Kolam foundation)
    const gridSize = 24;
    ctx.fillStyle = "rgba(41, 46, 51, 0.7)";
    for (let x = gridSize; x < width; x += gridSize) {
      for (let y = gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Procedural algorithmic loops using pseudo-random seed
    const pseudoRand = (s: number) => {
      const x = Math.sin(s) * 10000;
      return x - Math.floor(x);
    };

    const numRings = 4;
    const angleStep = (Math.PI * 2) / symmetry;

    for (let r = 1; r <= numRings; r++) {
      const radius = r * 35;
      const waveFreq = 2 + Math.floor(pseudoRand(seed + r) * 3);
      const waveAmp = 10 + pseudoRand(seed * 2 + r) * 15;

      ctx.beginPath();
      ctx.strokeStyle = r === numRings ? accent : r % 2 === 0 ? "#4285F4" : "#9DA4AA";
      ctx.lineWidth = r === 1 ? 2 : 1.2;

      for (let i = 0; i <= symmetry * 10; i++) {
        const theta = (i / (symmetry * 10)) * Math.PI * 2;
        const currentR = radius + Math.sin(theta * waveFreq * (symmetry / 2)) * waveAmp;
        const px = cx + Math.cos(theta) * currentR;
        const py = cy + Math.sin(theta) * currentR;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();
      ctx.stroke();

      // Symmetrical node dots
      ctx.fillStyle = accent;
      for (let s = 0; s < symmetry; s++) {
        const theta = s * angleStep;
        const dotX = cx + Math.cos(theta) * radius;
        const dotY = cy + Math.sin(theta) * radius;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Center focal node
    ctx.fillStyle = "#FBBC04";
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(() => {
    drawKolam();
  }, [symmetry, accent, seed]);

  const handleGenerate = () => {
    setSeed(Math.floor(Math.random() * 10000));
  };

  const handleReset = () => {
    setSeed(42);
    setSymmetry(8);
    setAccent("#B65F3C");
  };

  return (
    <div className="bg-[#07080A] border border-[#292E33] rounded-[2px] p-6 flex flex-col items-center justify-between">
      {/* Title & Info */}
      <div className="w-full flex items-center justify-between mb-4 border-b border-[#292E33] pb-3">
        <div>
          <h4 className="text-sm font-bold font-display uppercase text-[#F5F3EE]">
            PROCEDURAL KOLAM SYNTHESIZER
          </h4>
          <span className="text-[10px] font-mono text-[#9DA4AA]">
            TAMIL MATHEMATICAL GENERATIVE GEOMETRY
          </span>
        </div>
        <span className="text-xs font-mono text-[#B65F3C]">MATH × SVG/CANVAS</span>
      </div>

      {/* Interactive Canvas */}
      <div className="relative w-full max-w-[340px] h-[300px] border border-[#292E33] bg-[#0B0D0F] flex items-center justify-center rounded-[2px] overflow-hidden my-2">
        <canvas
          ref={canvasRef}
          width={340}
          height={300}
          className="w-full h-full cursor-crosshair"
          onClick={handleGenerate}
        />
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-[#6E767E] pointer-events-none">
          CLICK CANVAS TO RE-SEED
        </div>
      </div>

      {/* Synthesis Controls */}
      <div className="w-full pt-4 border-t border-[#292E33] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        {/* Symmetry Selector */}
        <div className="flex items-center gap-2">
          <span className="text-[#9DA4AA]">SYMMETRY:</span>
          {[4, 8, 12, 16].map((num) => (
            <button
              key={num}
              onClick={() => setSymmetry(num)}
              className={`px-2 py-1 rounded-[2px] border ${
                symmetry === num
                  ? "bg-[#B65F3C] text-white border-[#B65F3C]"
                  : "bg-[#111417] text-[#9DA4AA] border-[#292E33] hover:text-[#F5F3EE]"
              }`}
            >
              {num}x
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset
          </Button>
          <Button variant="terracotta" size="sm" onClick={handleGenerate}>
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Synthesize
          </Button>
        </div>
      </div>
    </div>
  );
};
