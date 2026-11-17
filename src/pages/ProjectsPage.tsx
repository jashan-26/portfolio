import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/content';
import './ProjectsPage.css';

export const ProjectsPage: React.FC = () => {
  return (
    <InnerPageWindow
      title="Projects.exe"
      variant="mint"
      icon={<Code2 size={15} strokeWidth={2.4} color="#7B61FF" />}
    >
      <div className="projects-page-inner">
        <div className="page-header-block">
          <h2 className="page-heading">Featured Projects</h2>
          <p className="page-subheading">
            AI/ML pipelines, deep learning models, and software engineering builds.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-full-card ${project.isPlaceholder ? 'is-placeholder-card' : ''}`}
            >
              <div className="proj-card-img-wrap">
                <img src={project.image} alt={project.title} className="proj-card-img" />
                {project.isPlaceholder && (
                  <span className="placeholder-badge">TODO / PLACEHOLDER</span>
                )}
              </div>

              <div className="proj-card-content">
                <h3 className="proj-card-title">{project.title}</h3>
                <p className="proj-card-desc">{project.description}</p>

                <div className="proj-card-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="proj-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="proj-card-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link-btn"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link-btn primary"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPageWindow>
  );
};
