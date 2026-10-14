import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCardWide } from './ProjectCardWide';
import { ProjectCardSplit } from './ProjectCardSplit';
import { ProjectCardSensor } from './ProjectCardSensor';
import { ProjectCardMpos } from './ProjectCardMpos';
import { projectsData } from '../../data/projects';
import { Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const shoppingate = projectsData.find((p) => p.id === 'shoppingate')!;
  const pmpeople = projectsData.find((p) => p.id === 'pmpeople')!;
  const seedling = projectsData.find((p) => p.id === 'seedling')!;
  const mpos = projectsData.find((p) => p.id === 'mpos')!;

  return (
    <section id="projects" className="section-spacing" aria-label="Selected Projects">
      <div className="container">
        <SectionHeader
          index="01"
          tag="SELECTED WORK"
          title="Engineered systems built for scale and practical utility."
          subtitle="A curated selection of real-world web applications spanning multi-service platforms, headless content ecosystems, real-time telemetry streaming, and administrative operations."
          extraContent={
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="mono-label">
                <Layers size={13} color="var(--accent-vermilion)" />
                4 PRODUCTION CASE STUDIES
              </span>
            </div>
          }
        />

        {/* Varied Project Layouts */}
        <div>
          {/* Project 01: Shoppingate (Wide Asymmetric Layout) */}
          <ProjectCardWide project={shoppingate} />

          {/* Project 02: PMPeople (Split Layout with Headless CMS) */}
          <ProjectCardSplit project={pmpeople} />

          {/* Project 03: Seedling (Interactive IoT Sensor Simulator) */}
          <ProjectCardSensor project={seedling} />

          {/* Project 04: MPOS (Point-of-Sale GRN Workflow) */}
          <ProjectCardMpos project={mpos} />
        </div>
      </div>
    </section>
  );
};
