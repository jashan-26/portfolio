import React from 'react';
import { Settings, Sparkles } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { skillCategories } from '../data/content';
import './SkillsPage.css';

export const SkillsPage: React.FC = () => {
  return (
    <InnerPageWindow
      title="Skills.exe"
      variant="mint"
      icon={<Settings size={15} strokeWidth={2.4} color="#27405A" />}
    >
      <div className="skills-page-inner">
        <div className="page-header-block">
          <h2 className="page-heading">Technical Arsenal & Competencies</h2>
          <p className="page-subheading">
            Frameworks, machine learning stacks, development toolchains, and leadership skills.
          </p>
        </div>

        <div className="skills-categories-list">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <h3 className="category-header">
                <Sparkles size={15} color="#E8559A" />
                <span>{cat.category}</span>
              </h3>

              <div className="chips-container">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="skill-chip">
                    <span className="chip-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPageWindow>
  );
};
