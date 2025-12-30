import { JetBrains_Mono, Inter } from "next/font/google";
import TerminalIntro from "./TerminalIntro";

// Font Loading Strategy (Sub-100ms LCP)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${jetbrainsMono.variable} ${inter.variable} min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden`}>
      
      {/* Background Grid Ambience (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* The Uplink Interface */}
      <div className="relative z-10 w-full">
        <TerminalIntro />
      </div>

      {/* Legal Footer Stub */}
      <footer className="absolute bottom-4 text-center w-full text-slate-600 text-[10px] font-mono uppercase tracking-widest">
        WAIN1+ NODE: SECURE // VERCEL EDGE // GEMINI 3 PREVIEW
      </footer>
    </main>
  );
}