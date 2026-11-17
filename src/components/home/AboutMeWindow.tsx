import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Window } from '../Window';
import { aboutPoints } from '../../data/content';
import './AboutMeWindow.css';

// Cat Icon for Window Title
const CatTitleIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
    <circle cx="12" cy="13" r="7.5" fill="#FFF" stroke="#27405A" strokeWidth="1.8" />
    <polygon points="5,7 8,2 11,6" fill="#FFF" stroke="#27405A" strokeWidth="1.8" strokeLinejoin="round" />
    <polygon points="13,6 16,2 19,7" fill="#FFF" stroke="#27405A" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="9.5" cy="12" r="1.2" fill="#27405A" />
    <circle cx="14.5" cy="12" r="1.2" fill="#27405A" />
  </svg>
);

export const AboutMeWindow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Window
      id="win-about-me"
      title="About_Me.exe"
      variant="mint"
      icon={<CatTitleIcon />}
      className="about-me-window cursor-pointer"
      onClick={() => navigate('/about')}
    >
      <div className="about-me-inner">
        {/* Left: Cat Astronaut Picture */}
        <div className="cat-astro-wrap">
          <img
            src="./assets/cat-astronaut.webp"
            alt="Cat astronaut in space helmet on pink cloud"
            className="cat-astro-img"
          />
        </div>

        {/* Right: 5 Points with Gold Diamond Bullets */}
        <div className="about-points-list">
          {aboutPoints.map((point, index) => (
            <div key={index} className="about-point-item">
              <span className="diamond-bullet">◆</span>
              <span className="about-point-text">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};
