import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Hero } from './components/hero/Hero';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { AboutSection } from './components/about/AboutSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { EducationSection } from './components/education/EducationSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import './styles/globals.css';

export const App: React.FC = () => {
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
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top Navigation */}
      <Header activeSection={activeSection} />

      {/* Main Single Page Document */}
      <main id="main-content" role="main" style={{ flex: 1 }}>
        {/* Section B: Hero with System Architecture Visualizer */}
        <Hero />

        {/* Section C: Selected Work / Projects */}
        <ProjectsSection />

        {/* Section D: About Me */}
        <AboutSection />

        {/* Section E: Professional Experience */}
        <ExperienceSection />

        {/* Section F: Technical Skills */}
        <SkillsSection />

        {/* Section G: Education */}
        <EducationSection />

        {/* Section H: Contact Section */}
        <ContactSection onCopyEmail={handleCopyEmail} />
      </main>

      {/* Section I: Minimalist Footer */}
      <Footer />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
};

export default App;
