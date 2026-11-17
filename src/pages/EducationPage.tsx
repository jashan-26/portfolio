import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { educationData } from '../data/content';
import './EducationPage.css';

export const EducationPage: React.FC = () => {
  return (
    <InnerPageWindow
      title="Education.exe"
      variant="mint"
      icon={<GraduationCap size={15} strokeWidth={2.4} color="#27405A" />}
    >
      <div className="education-page-inner">
        <div className="page-header-block">
          <h2 className="page-heading">Academic Journey</h2>
          <p className="page-subheading">
            Degree programs, cumulative metrics, and engineering specializations.
          </p>
        </div>

        <div className="education-cards-list">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-top-row">
                <div className="edu-title-group">
                  <div className="edu-icon-badge">
                    <GraduationCap size={24} color="#27405A" />
                  </div>
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <h4 className="edu-field">{edu.field}</h4>
                    <p className="edu-inst">{edu.institution}</p>
                  </div>
                </div>

                <div className="edu-metrics-badges">
                  <span className="cgpa-pill">
                    <Award size={14} color="#D97706" />
                    <strong>CGPA: {edu.cgpa}</strong>
                  </span>
                  <span className="status-pill">{edu.currentStatus}</span>
                  <span className="duration-pill">{edu.duration}</span>
                </div>
              </div>

              <div className="edu-divider" />

              <div className="edu-highlights-wrap">
                <h4 className="highlights-title">
                  <BookOpen size={14} color="#E8559A" />
                  <span>Program Highlights & Focus Areas</span>
                </h4>
                <ul className="highlights-list">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPageWindow>
  );
};
