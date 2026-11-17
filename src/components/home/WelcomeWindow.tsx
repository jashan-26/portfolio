import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, FileDown } from 'lucide-react';
import { Window } from '../Window';
import { profile } from '../../data/content';
import './WelcomeWindow.css';

export const WelcomeWindow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Window
      id="win-welcome"
      title="Welcome.exe"
      variant="pink"
      icon={<Heart size={14} fill="#E8559A" color="#E8559A" />}
      className="welcome-window"
    >
      <div className="welcome-inner">
        {/* Left Column: Text & CTA */}
        <div className="welcome-content-left">
          <h1 className="welcome-heading">
            Hey, I'm Jashan! <span className="heart-outline">♡</span>
          </h1>

          <p className="welcome-subtitle">{profile.subtitle}</p>

          <p className="welcome-description">{profile.shortBio}</p>

          <div className="welcome-actions">
            <button
              className="btn-explore-universe"
              onClick={() => navigate('/about')}
            >
              Explore My Universe →
            </button>

            <button
              className="btn-view-resume"
              onClick={() => window.open(profile.resumeUrl, '_blank')}
            >
              <FileDown size={15} strokeWidth={2.4} />
              <span>View Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Illustration */}
        <div className="welcome-illustration-wrap">
          <img
            src="./assets/hero-girl.webp"
            alt="Jashan with headphones at desk with white cat, laptop, heart mug, and window view"
            className="hero-girl-img"
          />
        </div>
      </div>
    </Window>
  );
};
