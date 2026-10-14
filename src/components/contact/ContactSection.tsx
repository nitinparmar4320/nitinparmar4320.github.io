'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, MapPin, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/SocialIcons';

interface ContactSectionProps {
  onCopyEmail: (email: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail }) => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('fullstack');
  const [recruiterName, setRecruiterName] = useState<string>('');
  const [customNote, setCustomNote] = useState<string>('');

  const emailAddress = 'nitinparmar4320@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/nitinparmar4320';
  const githubUrl = 'https://github.com/nitinparmar4320';

  const topics = [
    { id: 'fullstack', label: 'Full Stack Engineering Role', subject: 'Inquiry regarding Full Stack Developer role' },
    { id: 'architecture', label: 'Architecture & Microservices', subject: 'Discussion: Microservices & API Architecture' },
    { id: 'project', label: 'Product Collaboration', subject: 'Product Engineering Collaboration Inquiry' },
    { id: 'general', label: 'General Introduction', subject: 'Hello Nitin — Connecting from Portfolio' }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    onCopyEmail(emailAddress);
    setTimeout(() => setCopied(false), 2400);
  };

  const getMailtoHref = () => {
    // console.log(recruiterName, customNote, selectedTopic);

    const currentTopic = topics.find((t) => t.id === selectedTopic) || topics[0];
    const subject = encodeURIComponent(currentTopic.subject);
    const body = encodeURIComponent(
      `Hi Nitin,\n\n${recruiterName ? `My name is ${recruiterName}. ` : ''}${customNote ? `${customNote}\n\n` : ''}I came across your portfolio and would like to connect regarding ${currentTopic.label.toLowerCase()}.\n\nBest regards,\n${recruiterName || '[Your Name]'}`
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-spacing" aria-label="Contact Nitin Parmar">
      <div className="container">
        {/* Editorial Index Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-medium)] pb-3 mb-10 md:mb-12">
          <span className="mono-label">
            <span className="text-[var(--accent-vermilion)]">[06]</span> // INITIATE DIALOGUE
          </span>
          <span className="mono-label">RECRUITER & TEAM CHANNELS</span>
        </div>

        {/* Main Editorial Contact Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1.25fr)_minmax(320px,1fr)] gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Narrative, and Direct Channels */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] mb-6 text-[var(--text-primary)]">
              Have something{' '}
              <span className="italic font-normal text-[var(--accent-vermilion)]">
                worth building?
              </span>
            </h2>

            <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] mb-8 max-w-xl">
              I'm interested in connecting with teams working on thoughtful products, challenging engineering problems, and meaningful web experiences.
            </p>

            {/* Direct Channel Action Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {/* Primary Email Card */}
              <div className="bg-white border border-[var(--border-medium)] rounded-md p-5 sm:p-6 flex items-center justify-between flex-wrap gap-4 shadow-[var(--shadow-subtle)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded bg-[var(--bg-subtle)] border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-vermilion)] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="mono-label text-xs block mb-0.5">
                      DIRECT EMAIL:
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm sm:text-base font-semibold text-[var(--text-primary)] font-mono hover:text-[var(--accent-vermilion)] transition-colors"
                    >
                      {" " + emailAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="btn btn-secondary text-xs py-1.5 px-3 gap-1.5 rounded cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="btn btn-primary text-xs py-1.5 px-3.5 gap-1.5 rounded"
                  >
                    <span>Email Me</span>
                    <ArrowUpRight size={14} className="btn-icon-arrow" />
                  </a>
                </div>
              </div>

              {/* LinkedIn & GitHub Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[var(--border-medium)] rounded-md p-5 flex items-center justify-between no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--text-primary)] shadow-[var(--shadow-subtle)] hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon size={20} color="var(--accent-blue)" />
                    <div>
                      <span className="mono-label text-[0.65rem] block mb-0.5">
                        PROFESSIONAL NETWORK
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        LinkedIn Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-[var(--text-tertiary)]" />
                </a>

                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[var(--border-medium)] rounded-md p-5 flex items-center justify-between no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--text-primary)] shadow-[var(--shadow-subtle)] hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={20} color="var(--text-primary)" />
                    <div>
                      <span className="mono-label text-[0.65rem] block mb-0.5">
                        CODE REPOSITORIES
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        GitHub Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-[var(--text-tertiary)]" />
                </a>
              </div>
            </div>

            {/* Location Note */}
            <div className="flex items-center gap-2 text-[var(--text-tertiary)]">
              <MapPin size={14} className="text-[var(--accent-vermilion)] shrink-0" />
              <span className="mono-label text-xs">
                BASED IN AHMEDABAD, GUJARAT, INDIA (IST / UTC+5:30)
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Email Dispatch Composer */}
          <div className="bg-white border border-[var(--border-medium)] rounded-md p-6 sm:p-8 shadow-[var(--shadow-card)] relative">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3.5 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles size={15} className="text-[var(--accent-vermilion)]" />
                <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
                  QUICK DISPATCH // RECRUITER HELPER
                </span>
              </div>
              <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">
                PRE-FORMATTED DRAFT
              </span>
            </div>

            {/* Topic Selectors */}
            <div className="mb-5">
              <label className="block font-mono text-xs tracking-wider uppercase text-[var(--text-tertiary)] mb-2.5">
                SELECT DISCUSSION TOPIC
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topics.map((t) => {
                  const isSelected = selectedTopic === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.id)}
                      className={`p-2.5 rounded text-left text-xs font-sans transition-all cursor-pointer ${isSelected
                        ? 'border border-[var(--accent-vermilion)] bg-[var(--bg-subtle)] text-[var(--accent-vermilion)] font-semibold shadow-xs'
                        : 'border border-[var(--border-light)] bg-white text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                        }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recruiter Name Input */}
            <div className="mb-5">
              <label
                htmlFor="recruiter-name-input"
                className="block font-mono text-xs tracking-wider uppercase text-[var(--text-tertiary)] mb-1.5"
              >
                YOUR NAME / COMPANY (OPTIONAL)
              </label>
              <input
                id="recruiter-name-input"
                type="text"
                placeholder="e.g. Sarah Jenkins from Acme Engineering"
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded border border-[var(--border-medium)] font-sans text-sm text-[var(--text-primary)] bg-[var(--bg-subtle)] focus:bg-white focus:border-[var(--accent-vermilion)] outline-none transition-colors"
              />
            </div>

            {/* Custom Note Input */}
            <div className="mb-6">
              <label
                htmlFor="recruiter-note-input"
                className="block font-mono text-xs tracking-wider uppercase text-[var(--text-tertiary)] mb-1.5"
              >
                NOTE OR DETAILS (OPTIONAL)
              </label>
              <textarea
                id="recruiter-note-input"
                rows={3}
                placeholder="We have an open role for a Full Stack Engineer focusing on React & Node.js..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded border border-[var(--border-medium)] font-sans text-sm text-[var(--text-primary)] bg-[var(--bg-subtle)] focus:bg-white focus:border-[var(--accent-vermilion)] outline-none transition-colors resize-y"
              />
            </div>

            {/* Launch Mail Client Button */}
            <a
              href={getMailtoHref()}
              className="btn btn-accent w-full py-3.5 text-sm gap-2"
            >
              <Send size={15} />
              <span>Launch Pre-Filled Email</span>
            </a>

            <div className="mt-4 text-center font-mono text-[0.68rem] text-[var(--text-tertiary)]">
              Direct mailto protocol • Opens in default email client (Outlook, Apple Mail, Gmail)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
