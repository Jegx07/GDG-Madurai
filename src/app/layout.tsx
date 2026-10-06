import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDG Madurai DevFest 2026 | Build From Madurai",
  description:
    "Discover GDG Madurai DevFest 2026 — a developer festival bringing community, technology, learning and innovation together in Madurai.",
  keywords: [
    "GDG Madurai",
    "DevFest 2026",
    "Google Developer Group",
    "Madurai Tech",
    "AI",
    "Cloud",
    "Web",
    "Android",
    "Developer Conference Tamil Nadu",
  ],
  authors: [{ name: "GDG Madurai" }],
  openGraph: {
    title: "GDG Madurai DevFest 2026 | Build From Madurai",
    description:
      "A developer festival where local community, technology and ideas meet the future. Build from Madurai.",
    url: "https://devfest.gdgmadurai.in",
    siteName: "GDG Madurai DevFest 2026",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDG Madurai DevFest 2026 | Build From Madurai",
    description:
      "A developer festival where local community, technology and ideas meet the future. Build from Madurai.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#0B0D0F] text-[#F5F3EE] antialiased selection:bg-[#B65F3C] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Event",
                name: "GDG Madurai DevFest 2026",
                description:
                  "A developer festival where local community, technology and ideas meet the future. Build from Madurai.",
                startDate: "2026-10-24T09:00:00+05:30",
                endDate: "2026-10-24T18:00:00+05:30",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                eventStatus: "https://schema.org/EventScheduled",
                location: {
                  "@type": "Place",
                  name: "Madurai Convention Center",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Madurai",
                    addressRegion: "Tamil Nadu",
                    addressCountry: "IN",
                  },
                },
                organizer: {
                  "@type": "Organization",
                  name: "GDG Madurai",
                  url: "https://devfest.gdgmadurai.in",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "GDG Madurai",
                url: "https://devfest.gdgmadurai.in",
                logo: "https://devfest.gdgmadurai.in/logo.png",
              },
            ]),
          }}
        />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen pt-16 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
