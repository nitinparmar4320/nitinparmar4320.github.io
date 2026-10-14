import React, { useState, useEffect } from 'react';
import { Monogram } from './Monogram';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
          backgroundColor: isScrolled ? 'rgba(248, 247, 242, 0.94)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-medium)' : '1px solid transparent',
          paddingTop: isScrolled ? '0.65rem' : '1.1rem',
          paddingBottom: isScrolled ? '0.65rem' : '1.1rem'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Wordmark & Monogram */}
          <a
            href="#hero"
            aria-label="Nitin Parmar — Return to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none'
            }}
          >
            <Monogram size={34} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  lineHeight: 1.2
                }}
              >
                NITIN PARMAR
              </span>
              <span
                className="mono-label"
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.04em'
                }}
              >
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            role="navigation"
            aria-label="Main menu"
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              padding: '0.4rem 1.25rem',
              borderRadius: '999px',
              backgroundColor: isScrolled ? 'var(--bg-subtle)' : 'rgba(255, 255, 255, 0.65)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)'
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--accent-vermilion)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '0.2rem 0',
                    transition: 'color var(--transition-fast)'
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--accent-vermilion)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Status Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              className="status-pill"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.45rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-secondary)',
                padding: '0.35rem 0.65rem',
                backgroundColor: 'rgba(46, 125, 50, 0.08)',
                border: '1px solid rgba(46, 125, 50, 0.2)',
                borderRadius: '4px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#2E7D32',
                  display: 'inline-block'
                }}
              />
              <span>Ahmedabad, IN</span>
            </div>

            <a
              href="#contact"
              className="btn btn-primary"
              style={{
                fontSize: '0.82rem',
                padding: '0.55rem 1.1rem',
                borderRadius: '4px'
              }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="btn-icon-arrow" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              style={{
                display: 'none',
                background: 'transparent',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'var(--text-primary)'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg-primary)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '1.2rem',
              right: '1.2rem'
            }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'none',
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <span className="mono-label" style={{ color: 'var(--accent-vermilion)' }}>
              INDEX // NAVIGATION
            </span>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: activeSection === link.id ? 'var(--accent-vermilion)' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem',
                  textDecoration: 'none'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--text-tertiary)'
                  }}
                >
                  0{idx + 1}.
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div
            style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-medium)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}
          >
            <span className="mono-label">CONTACT DIRECT</span>
            <a
              href="mailto:nitinparmar4320@gmail.com"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              nitinparmar4320@gmail.com
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .status-pill {
            display: inline-flex !important;
          }
        }
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};
