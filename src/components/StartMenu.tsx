import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItems, profile } from '../data/content';
import './StartMenu.css';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isOpen) return null;

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="start-menu-overlay" onClick={onClose}>
      <div
        className="start-menu-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Start Menu"
      >
        {/* Header / Profile banner */}
        <div className="start-menu-header">
          <div className="start-avatar-wrap">
            <img src="./assets/hero-girl.webp" alt="Jashan avatar" />
          </div>
          <div className="start-user-info">
            <span className="start-username">{profile.name}</span>
            <span className="start-userrole">AIML Undergrad @ CEC</span>
          </div>
        </div>

        {/* Programs / Sections List */}
        <div className="start-menu-body">
          <span className="start-section-title">Programs & Portals</span>
          <div className="start-items-grid">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <button
                  key={item.id}
                  className={`start-item-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleNavigate(item.path)}
                >
                  <span className="start-item-title">{item.windowTitle}</span>
                  <span className="start-item-desc">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="start-menu-footer">
          <button
            className="start-footer-btn"
            onClick={() => {
              window.open(profile.resumeUrl, '_blank');
              onClose();
            }}
          >
            <span>Resume.pdf</span>
          </button>
          <button
            className="start-footer-btn restart-btn"
            onClick={() => {
              navigate('/');
              window.location.reload();
            }}
          >
            <span>Restart OS ↻</span>
          </button>
        </div>
      </div>
    </div>
  );
};
