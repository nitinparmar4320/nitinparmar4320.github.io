import React from 'react';
import { Monogram } from './Monogram';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-medium)',
        paddingTop: 'var(--space-3xl)',
        paddingBottom: 'var(--space-2xl)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Tier */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          {/* Brand Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Monogram size={38} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  lineHeight: 1.2
                }}
              >
                NITIN PARMAR
              </div>
              <div className="mono-label" style={{ fontSize: '0.72rem' }}>
                Full Stack Developer • Ahmedabad, India
              </div>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/nitinparmar4320"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label"
              style={{
                color: 'var(--text-secondary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color var(--transition-fast)'
              }}
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nitinparmar4320"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label"
              style={{
                color: 'var(--text-secondary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color var(--transition-fast)'
              }}
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:nitinparmar4320@gmail.com"
              className="mono-label"
              style={{
                color: 'var(--text-secondary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color var(--transition-fast)'
              }}
            >
              <Mail size={15} />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{
                fontSize: '0.78rem',
                padding: '0.45rem 0.85rem',
                gap: '0.4rem',
                borderRadius: '4px'
              }}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Minimal statement */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-tertiary)'
          }}
        >
          <div>Designed and built with intent. All rights reserved © {currentYear}.</div>
          <div>REACT.JS // TYPESCRIPT // NODE.JS // POSTGRESQL</div>
        </div>
      </div>
    </footer>
  );
};
