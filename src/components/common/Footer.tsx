'use client';

import React, { useState, useEffect } from 'react';
import { Monogram } from './Monogram';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      role="contentinfo"
      className="bg-[var(--bg-primary)] border-t border-[var(--border-medium)] pt-16 pb-12 relative"
    >
      <div className="container">
        {/* Top Tier */}
        <div className="flex items-center justify-between flex-wrap gap-6 pb-8 border-b border-[var(--border-light)]">
          {/* Brand Identity */}
          <div className="flex items-center gap-4">
            <Monogram size={38} />
            <div>
              <div className="font-sans font-bold text-base tracking-[-0.02em] text-[var(--text-primary)] leading-tight">
                NITIN PARMAR
              </div>
              <div className="mono-label text-xs">
                Full Stack Developer • Ahmedabad, India
              </div>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="https://github.com/nitinparmar4320"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nitinparmar4320"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5"
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:nitinparmar4320@gmail.com"
              className="mono-label text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1.5"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary text-xs py-1.5 px-3 gap-1.5 rounded cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-6 font-mono text-xs text-[var(--text-tertiary)]">
          <div>Designed and built with intent. All rights reserved © {currentYear}.</div>
          <div className="tracking-wider">REACT.JS // TYPESCRIPT // NODE.JS // POSTGRESQL</div>
        </div>
      </div>
    </footer>
  );
};
