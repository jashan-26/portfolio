import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { experiences } from '../data/content';
import './ExperiencePage.css';

export const ExperiencePage: React.FC = () => {
  return (
    <InnerPageWindow
      title="Experience.exe"
      variant="mint"
      icon={<Briefcase size={15} strokeWidth={2.4} color="#27405A" />}
    >
      <div className="experience-page-inner">
        <div className="page-header-block">
          <h2 className="page-heading">Experience & Timeline</h2>
          <p className="page-subheading">
            Research roles, hackathon ventures, and practical projects.
          </p>
        </div>

        <div className="timeline-container">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`timeline-card ${exp.isPlaceholder ? 'is-placeholder-card' : ''}`}
            >
              <div className="timeline-node">
                <div className="node-dot" />
              </div>

              <div className="timeline-card-body">
                <div className="timeline-header-row">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-org">{exp.organization}</h4>
                  </div>
                  <div className="timeline-period-badge">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="timeline-bullets">
                  {exp.description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>

                <div className="timeline-skills">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="timeline-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPageWindow>
  );
};
