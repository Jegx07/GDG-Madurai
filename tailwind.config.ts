import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gdg: {
          blue: "#4285F4",
          red: "#EA4335",
          yellow: "#FBBC04",
          green: "#34A853",
        },
        madurai: {
          terracotta: "#B65F3C",
          "terracotta-dark": "#8C4325",
          "terracotta-light": "#CF7E5D",
          amber: "#D97736",
        },
        surface: {
          950: "#07080A",
          900: "#0B0D0F",
          800: "#111417",
          700: "#171B1F",
          600: "#1E2328",
        },
        border: {
          DEFAULT: "#292E33",
          subtle: "#1F2327",
          focus: "#4285F4",
        },
        content: {
          primary: "#F5F3EE",
          secondary: "#9DA4AA",
          tertiary: "#6E767E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow-vaigai": "vaigai 12s linear infinite",
        "marquee-scroll": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-rev 35s linear infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        vaigai: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "kolam-dots": "radial-gradient(#292E33 1px, transparent 1px)",
        "gopuram-grid": "linear-gradient(to right, #1F2327 1px, transparent 1px), linear-gradient(to bottom, #1F2327 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
