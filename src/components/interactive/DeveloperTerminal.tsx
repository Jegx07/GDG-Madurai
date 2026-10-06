"use client";

import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from "lucide-react";

interface LogEntry {
  type: "input" | "output" | "system" | "error" | "success";
  text: string;
}

export const DeveloperTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    { type: "system", text: "GDG MADURAI TERMINAL v2026.1 // SYSTEM ONLINE" },
    { type: "system", text: 'Type "help" to view available developer commands.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newHistory: LogEntry[] = [...history, { type: "input", text: `$ ${cmd}` }];
    const parts = cmd.toLowerCase().split(" ");
    const main = parts[0];

    switch (main) {
      case "help":
        newHistory.push({
          type: "output",
          text: "COMMANDS: whoami, ls, cat <file>, build, deploy, kolam, coords, clear",
        });
        break;
      case "whoami":
        newHistory.push({
          type: "output",
          text: "developer @ gdg-madurai-devfest // role: builder // location: madurai",
        });
        break;
      case "ls":
        newHistory.push({
          type: "output",
          text: "community/  ai/  cloud/  web/  android/  flutter/  vaigai.stream  gopuram.geom",
        });
        break;
      case "cat":
        const target = parts[1];
        if (target === "vaigai.stream") {
          newHistory.push({
            type: "output",
            text: "Vaigai River: Lifeblood of Madurai, carrying algorithmic flow to the world.",
          });
        } else if (target === "gopuram.geom") {
          newHistory.push({
            type: "output",
            text: "Gopuram: 9 tiers of sacred architectural symmetry converted to digital vectors.",
          });
        } else {
          newHistory.push({
            type: "error",
            text: `File not found: ${target || "unspecified"}. Try "cat vaigai.stream"`,
          });
        }
        break;
      case "coords":
        newHistory.push({
          type: "output",
          text: "LATITUDE: 9.9252° N | LONGITUDE: 78.1198° E | MADURAI, TAMIL NADU",
        });
        break;
      case "build":
        newHistory.push({
          type: "system",
          text: "[OPTIMIZING ASSETS] Compiling Madurai DNA with Gemini 2.0 & Cloud...",
        });
        newHistory.push({
          type: "success",
          text: "✔ BUILD COMPLETED IN 142ms // ZERO RUNTIME DEFECTS",
        });
        break;
      case "deploy":
        newHistory.push({
          type: "system",
          text: "Deploying build artifacts: MADURAI → WORLD...",
        });
        newHistory.push({
          type: "success",
          text: "✔ PRODUCTION RELEASE ACTIVE AT devfest.gdgmadurai.in",
        });
        try {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
        } catch (err) {}
        break;
      case "kolam":
        newHistory.push({
          type: "output",
          text: "Switch to the Digital Kolam tab above to synthesize live procedural patterns!",
        });
        break;
      case "clear":
        setHistory([{ type: "system", text: "GDG MADURAI TERMINAL // READY" }]);
        setInputVal("");
        return;
      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: "${cmd}". Type "help" for command matrix.`,
        });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <div className="bg-[#07080A] border border-[#292E33] rounded-[2px] font-mono text-xs overflow-hidden flex flex-col h-[380px]">
      {/* Terminal Title Bar */}
      <div className="bg-[#111417] px-4 py-2.5 border-b border-[#292E33] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
          <span className="ml-2 text-[11px] text-[#9DA4AA]">
            bash — gdg@madurai:~/devfest-2026
          </span>
        </div>
        <div className="text-[10px] text-[#B65F3C]">ONLINE // PORT 8080</div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 select-text">
        {history.map((entry, idx) => (
          <div key={idx} className="leading-relaxed">
            {entry.type === "input" && (
              <span className="text-[#F5F3EE] font-semibold">{entry.text}</span>
            )}
            {entry.type === "output" && (
              <span className="text-[#9DA4AA] block pl-2">{entry.text}</span>
            )}
            {entry.type === "system" && (
              <span className="text-[#4285F4] block">{entry.text}</span>
            )}
            {entry.type === "success" && (
              <span className="text-[#34A853] font-semibold block">{entry.text}</span>
            )}
            {entry.type === "error" && (
              <span className="text-[#EA4335] block">{entry.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Form */}
      <form
        onSubmit={handleCommand}
        className="border-t border-[#292E33] bg-[#0B0D0F] px-4 py-2 flex items-center gap-2"
      >
        <span className="text-[#B65F3C] font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help', 'whoami', 'build', 'deploy'..."
          className="flex-1 bg-transparent border-none text-[#F5F3EE] focus:outline-none font-mono text-xs placeholder:text-[#6E767E]"
          aria-label="Terminal command input"
        />
        <button
          type="submit"
          className="p-1 text-[#9DA4AA] hover:text-[#F5F3EE]"
          aria-label="Run command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
