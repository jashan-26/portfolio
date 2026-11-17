import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileDown, Mail, Check, Sparkles } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { profile, aboutPoints, currentlyExploring } from '../data/content';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <InnerPageWindow
      title="About_Me.exe"
      variant="mint"
      icon={
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
          <circle cx="12" cy="13" r="7.5" fill="#FFF" stroke="#27405A" strokeWidth="1.8" />
          <polygon points="5,7 8,2 11,6" fill="#FFF" stroke="#27405A" strokeWidth="1.8" strokeLinejoin="round" />
          <polygon points="13,6 16,2 19,7" fill="#FFF" stroke="#27405A" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="9.5" cy="12" r="1.2" fill="#27405A" />
          <circle cx="14.5" cy="12" r="1.2" fill="#27405A" />
        </svg>
      }
    >
      <div className="about-page-layout">
        {/* Left Column: Portrait / Space Cat Avatar */}
        <div className="about-left-col">
          <div className="about-avatar-card">
            <img
              src="./assets/cat-astronaut.webp"
              alt="Jashan's Mascot - Cat Astronaut in Space"
              className="about-avatar-img"
            />
            <div className="about-avatar-badge">
              <span>{profile.name}</span>
            </div>
          </div>

          {/* Quick facts card */}
          <div className="quick-facts-box">
            <h3 className="quick-facts-title">Quick Facts</h3>
            <div className="quick-facts-list">
              {aboutPoints.map((point, index) => (
                <div key={index} className="quick-fact-item">
                  <span className="gold-diamond">◆</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Interests, Checklist, Buttons */}
        <div className="about-right-col">
          <div className="about-bio-section">
            <h2 className="about-section-heading">
              Hello, World! <span className="pink-heart">♡</span>
            </h2>
            <p className="about-bio-text">{profile.fullBio}</p>
          </div>

          <div className="about-details-grid">
            {/* Interests & Focus */}
            <div className="detail-card">
              <h3 className="card-subheading">
                <Sparkles size={16} color="#E8559A" />
                <span>Interests & Passions</span>
              </h3>
              <p className="detail-card-text">
                Passionate about Computer Vision, Large Language Models, Multi-Agent Systems,
                and applying deep learning to atmospheric sciences and earth observation data.
              </p>
            </div>

            {/* Currently Exploring Checklist */}
            <div className="detail-card">
              <h3 className="card-subheading">
                <Check size={16} color="#6FC4A9" />
                <span>Currently Exploring</span>
              </h3>
              <div className="detail-checklist">
                {currentlyExploring.map((item) => (
                  <div key={item.id} className="detail-check-item">
                    <span
                      className={`check-box-mini ${item.checked ? 'is-active' : ''}`}
                    >
                      {item.checked ? '✓' : ''}
                    </span>
                    <span className="check-text-mini">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="about-actions-row">
            <button
              className="about-btn-primary"
              onClick={() => window.open(profile.resumeUrl, '_blank')}
            >
              <FileDown size={16} />
              <span>View Resume</span>
            </button>
            <button
              className="about-btn-secondary"
              onClick={() => navigate('/contact')}
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </InnerPageWindow>
  );
};
