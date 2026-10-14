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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-medium)',
            paddingBottom: '0.75rem',
            marginBottom: 'var(--space-2xl)'
          }}
        >
          <span className="mono-label">
            <span style={{ color: 'var(--accent-vermilion)' }}>[06]</span> // INITIATE DIALOGUE
          </span>
          <span className="mono-label">RECRUITER & TEAM CHANNELS</span>
        </div>

        {/* Main Editorial Contact Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(320px, 1fr)',
            gap: 'var(--space-3xl)',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Headline, Narrative, and Direct Channels */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)'
              }}
            >
              Have something{' '}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--accent-vermilion)'
                }}
              >
                worth building?
              </span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}
            >
              I'm interested in connecting with teams working on thoughtful products, challenging engineering problems, and meaningful web experiences.
            </p>

            {/* Direct Channel Action Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {/* Primary Email Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '6px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-vermilion)'
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="mono-label" style={{ fontSize: '0.68rem', display: 'block' }}>
                      DIRECT EMAIL
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={handleCopy}
                    className="btn btn-secondary"
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.45rem 0.85rem',
                      gap: '0.4rem'
                    }}
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="btn btn-primary"
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.45rem 0.85rem',
                      gap: '0.4rem'
                    }}
                  >
                    <span>Email Me</span>
                    <ArrowUpRight size={14} className="btn-icon-arrow" />
                  </a>
                </div>
              </div>

              {/* LinkedIn & GitHub Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}
                className="social-cards-grid"
              >
                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '6px',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="social-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <LinkedinIcon size={20} color="var(--accent-blue)" />
                    <div>
                      <span className="mono-label" style={{ fontSize: '0.65rem', display: 'block' }}>
                        PROFESSIONAL NETWORK
                      </span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        LinkedIn Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={15} color="var(--text-tertiary)" />
                </a>

                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '6px',
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                  className="social-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <GithubIcon size={20} color="var(--text-primary)" />
                    <div>
                      <span className="mono-label" style={{ fontSize: '0.65rem', display: 'block' }}>
                        CODE REPOSITORIES
                      </span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        GitHub Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={15} color="var(--text-tertiary)" />
                </a>
              </div>
            </div>

            {/* Location Note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-tertiary)' }}>
              <MapPin size={14} color="var(--accent-vermilion)" />
              <span className="mono-label" style={{ fontSize: '0.72rem' }}>
                BASED IN AHMEDABAD, GUJARAT, INDIA (IST / UTC+5:30)
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Email Dispatch Composer */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: '6px',
              padding: '2rem',
              boxShadow: 'var(--shadow-card)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '0.85rem',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={15} color="var(--accent-vermilion)" />
                <span className="mono-label" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  QUICK DISPATCH // RECRUITER HELPER
                </span>
              </div>
              <span className="mono-label" style={{ fontSize: '0.68rem' }}>
                PRE-FORMATTED DRAFT
              </span>
            </div>

            {/* Topic Selectors */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: '0.65rem'
                }}
              >
                SELECT DISCUSSION TOPIC
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {topics.map((t) => {
                  const isSelected = selectedTopic === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.id)}
                      style={{
                        padding: '0.6rem 0.75rem',
                        borderRadius: '4px',
                        border: isSelected ? '1px solid var(--accent-vermilion)' : '1px solid var(--border-light)',
                        backgroundColor: isSelected ? 'var(--bg-subtle)' : '#FFFFFF',
                        color: isSelected ? 'var(--accent-vermilion)' : 'var(--text-primary)',
                        fontSize: '0.78rem',
                        fontWeight: isSelected ? 600 : 500,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recruiter Name Input */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label
                htmlFor="recruiter-name-input"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: '0.4rem'
                }}
              >
                YOUR NAME / COMPANY (OPTIONAL)
              </label>
              <input
                id="recruiter-name-input"
                type="text"
                placeholder="e.g. Sarah Jenkins from Acme Engineering"
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-medium)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-subtle)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Custom Note Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                htmlFor="recruiter-note-input"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--text-tertiary)',
                  marginBottom: '0.4rem'
                }}
              >
                NOTE OR DETAILS (OPTIONAL)
              </label>
              <textarea
                id="recruiter-note-input"
                rows={3}
                placeholder="We have an open role for a Full Stack Engineer focusing on React & Node.js..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-medium)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-subtle)',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Launch Mail Client Button */}
            <a
              href={getMailtoHref()}
              className="btn btn-accent"
              style={{
                width: '100%',
                padding: '0.85rem',
                fontSize: '0.9rem'
              }}
            >
              <Send size={15} />
              <span>Launch Pre-Filled Email</span>
            </a>

            <div
              style={{
                marginTop: '1rem',
                textAlign: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-tertiary)'
              }}
            >
              Direct mailto protocol • Opens in default email client (Outlook, Apple Mail, Gmail)
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
        @media (max-width: 600px) {
          .social-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .social-card:hover {
          border-color: var(--text-primary) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-subtle);
        }
      `}</style>
    </section>
  );
};
