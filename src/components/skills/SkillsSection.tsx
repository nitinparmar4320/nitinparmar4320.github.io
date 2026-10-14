import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { skillsData } from '../../data/skills';
import { Code2, Server, Database, Network, Radio, Cloud } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'apis', label: 'APIs & CMS' },
    { id: 'realtime', label: 'Real-time' },
    { id: 'devops', label: 'Cloud & Tools' }
  ];

  const filteredCategories =
    selectedFilter === 'all'
      ? skillsData
      : skillsData.filter((cat) => cat.id === selectedFilter);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={16} color="var(--accent-vermilion)" />;
      case 'backend':
        return <Server size={16} color="var(--accent-blue)" />;
      case 'databases':
        return <Database size={16} color="var(--accent-amber)" />;
      case 'apis':
        return <Network size={16} color="var(--accent-vermilion)" />;
      case 'realtime':
        return <Radio size={16} color="var(--accent-green)" />;
      case 'devops':
        return <Cloud size={16} color="var(--accent-blue)" />;
      default:
        return <Code2 size={16} />;
    }
  };

  return (
    <section id="skills" className="section-spacing" aria-label="Technical Skills">
      <div className="container">
        <SectionHeader
          index="04"
          tag="TECHNICAL TAXONOMY"
          title="Tools I use to turn ideas into working systems."
          subtitle="A structured taxonomy of verified languages, libraries, databases, and architectural patterns applied in production web environments."
        />

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          {filterOptions.map((opt) => {
            const isActive = selectedFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                style={{
                  background: isActive ? 'var(--text-primary)' : 'var(--bg-subtle)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-medium)',
                  borderRadius: '4px',
                  padding: '0.45rem 0.95rem',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem'
          }}
          className="skills-grid"
        >
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                borderRadius: '6px',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)'
              }}
              className="skill-category-card"
            >
              <div>
                {/* Category Top Banner */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--border-light)',
                    paddingBottom: '0.75rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {getCategoryIcon(category.id)}
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <span className="mono-label" style={{ fontSize: '0.68rem' }}>
                    {category.badge}
                  </span>
                </div>

                {/* Capability Summary */}
                <p
                  style={{
                    fontSize: '0.86rem',
                    lineHeight: 1.55,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem'
                  }}
                >
                  {category.summary}
                </p>
              </div>

              {/* Verified Technology Badges */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem'
                  }}
                >
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="mono-tag"
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.35rem 0.65rem',
                        backgroundColor: 'var(--bg-subtle)',
                        borderColor: 'var(--border-medium)',
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-vermilion)'
                        }}
                      />
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.65rem',
                    borderTop: '1px dashed var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-tertiary)'
                  }}
                >
                  <span>{category.skills.length} VERIFIED STACK TOOLS</span>
                  <span>PRODUCTION READY</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
