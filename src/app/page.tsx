'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/common/Header';
// Previous hero designs preserved as options:
// import { Hero } from '@/components/hero/Hero';
// import { HeroShowcase } from '@/components/hero/HeroShowcase';
import { HeroWorkspace } from '@/components/hero/HeroWorkspace';
import { ProjectsSlider } from '@/components/sections/ProjectsSlider';
import { AboutSection } from '@/components/about/AboutSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { EducationSection } from '@/components/education/EducationSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/common/Footer';
import { Toast } from '@/components/common/Toast';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);

  // Scroll spy to highlight active section in the navigation
  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'about', 'experience', 'skills', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (email: string) => {
    setToastMessage(`Email copied to clipboard: ${email}`);
    setIsToastVisible(true);
  };

  return (
    <div className="portfolio-app min-h-screen flex flex-col bg-transparent">
      {/* Sticky Top Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Single Page Document */}
      <main id="main-content" role="main" className="flex-1">
        {/* Section 00: Modern Developer Studio Workspace Hero */}
        <HeroWorkspace />

        {/* Section 01: Selected Work / Projects (Motion-Driven Horizontal Scrubber Track) */}
        <ProjectsSlider />

        {/* Section 02: About Me */}
        <AboutSection />

        {/* Section 03: Professional Experience */}
        <ExperienceSection />

        {/* Section 04: Technical Skills */}
        <SkillsSection />

        {/* Section 05: Education */}
        <EducationSection />

        {/* Section 06: Contact Section */}
        <ContactSection onCopyEmail={handleCopyEmail} />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
