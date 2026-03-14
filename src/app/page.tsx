"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { HeroLanding } from "@/components/HeroLanding";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BubbleBackground } from "@/components/BubbleBackground";

export default function Home() {
  return (
    <ThemeProvider>
      {/* Full-page floating bubble animation */}
      <BubbleBackground />
      <ScrollProgress />
      <Navbar />
      {/* Full-screen cinematic hero landing */}
      <HeroLanding />
      {/* Portfolio sections with scroll reveal */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
