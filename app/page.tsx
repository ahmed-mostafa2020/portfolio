"use client";

import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

// ========================================
// Home Page — Single Page Portfolio
// ========================================
export default function Home() {
  return (
    <I18nProvider>
      {/* Background Mesh Gradient */}
      <div className="mesh-gradient" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        <HeroSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsapp />
    </I18nProvider>
  );
}
