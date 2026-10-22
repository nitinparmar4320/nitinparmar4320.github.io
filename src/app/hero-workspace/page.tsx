import type { Metadata } from 'next';
import { Header } from '@/components/common/Header';
import { HeroWorkspace } from '@/components/hero/HeroWorkspace';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Hero Workspace Design | Nitin Parmar',
  description:
    'Dedicated preview of the modern studio workspace hero design for Nitin Parmar, Full Stack Developer.',
};

export default function HeroWorkspacePage() {
  return (
    <div className="portfolio-app min-h-screen flex flex-col bg-[var(--bg-primary)]">
      {/* Sticky Navigation */}
      <Header activeSection="hero" />

      {/* Hero Showcase Content */}
      <main id="main-content" role="main" className="flex-1">
        <HeroWorkspace />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
