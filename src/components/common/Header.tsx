'use client';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F7F2]/95 backdrop-blur-md border-b border-[var(--border-medium)] py-2.5 shadow-xs'
            : 'bg-transparent border-b border-transparent py-4'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Brand Wordmark & Monogram */}
          <a
            href="#hero"
            aria-label="Nitin Parmar — Return to top"
            className="flex items-center gap-3.5 no-underline group"
          >
            <Monogram size={34} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[0.95rem] tracking-[-0.02em] text-[var(--text-primary)] leading-tight">
                NITIN PARMAR
              </span>
              <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)] tracking-wider">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            role="navigation"
            aria-label="Main menu"
            className={`hidden md:flex items-center gap-7 px-5 py-1.5 rounded-full border border-[var(--border-light)] shadow-xs transition-colors ${
              isScrolled ? 'bg-[var(--bg-subtle)]' : 'bg-white/70 backdrop-blur-xs'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-sans transition-colors relative py-1 ${
                    isActive
                      ? 'text-[var(--accent-vermilion)] font-semibold'
                      : 'text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent-vermilion)] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Status Indicator */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:inline-flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)] px-2.5 py-1.5 bg-green-900/5 border border-green-700/20 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse inline-block" />
              <span>Ahmedabad, IN</span>
            </div>

            <a
              href="#contact"
              className="btn btn-primary text-xs sm:text-sm py-2 px-3.5 sm:px-4 rounded"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="btn-icon-arrow" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden bg-transparent border border-[var(--border-medium)] rounded p-2 text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
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
          className="fixed inset-0 bg-[#F8F7F2] z-[999] flex flex-col justify-center p-8 animate-[fadeIn_0.2s_ease-out]"
        >
          <div className="absolute top-5 right-5">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 border border-[var(--border-medium)] rounded bg-white text-[var(--text-primary)] cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-8">
            <span className="mono-label text-[var(--accent-vermilion)]">
              INDEX // NAVIGATION
            </span>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-3xl flex items-baseline gap-4 no-underline ${
                  activeSection === link.id ? 'text-[var(--accent-vermilion)] font-medium' : 'text-[var(--text-primary)]'
                }`}
              >
                <span className="font-mono text-sm text-[var(--text-tertiary)]">
                  0{idx + 1}.
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-[var(--border-medium)] flex flex-col gap-2">
            <span className="mono-label">CONTACT DIRECT</span>
            <a
              href="mailto:nitinparmar4320@gmail.com"
              className="font-mono text-sm sm:text-base text-[var(--text-primary)] font-semibold hover:text-[var(--accent-vermilion)] transition-colors"
            >
              nitinparmar4320@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};
