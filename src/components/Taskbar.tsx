import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Battery, Heart, Code2, Trophy, Award, FileText, Briefcase, GraduationCap, Settings, Mail } from 'lucide-react';
import { StartMenu } from './StartMenu';
import { navItems } from '../data/content';
import './Taskbar.css';

interface TaskbarProps {
  onToggleWindow?: (windowId: string) => void;
  openWindows?: Record<string, boolean>;
}

export const Taskbar: React.FC<TaskbarProps> = () => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const isProjects = location.pathname === '/projects';
  const isAchievements = location.pathname === '/achievements';

  // Check if current inner route is outside the default three
  const currentNavItem = navItems.find((item) =>
    item.path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(item.path)
  );

  const isExtraTab =
    currentNavItem &&
    currentNavItem.path !== '/' &&
    currentNavItem.path !== '/projects' &&
    currentNavItem.path !== '/achievements';

  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase size={14} strokeWidth={2.2} />;
      case 'GraduationCap':
        return <GraduationCap size={14} strokeWidth={2.2} />;
      case 'Settings':
        return <Settings size={14} strokeWidth={2.2} />;
      case 'Award':
        return <Award size={14} strokeWidth={2.2} color="#E8559A" />;
      case 'FileText':
        return <FileText size={14} strokeWidth={2.2} />;
      case 'Mail':
        return <Mail size={14} strokeWidth={2.2} color="#E8559A" />;
      default:
        return (
          <span style={{ fontSize: 13, lineHeight: 1 }}>♡</span>
        );
    }
  };

  return (
    <>
      <StartMenu isOpen={isStartOpen} onClose={() => setIsStartOpen(false)} />

      <footer className="os-taskbar" role="navigation" aria-label="Taskbar">
        {/* Left side: Start + Tabs */}
        <div className="taskbar-left">
          {/* Start Button */}
          <button
            className={`taskbar-start-btn ${isStartOpen ? 'pressed' : ''}`}
            onClick={() => setIsStartOpen(!isStartOpen)}
            aria-label="Start Menu"
            aria-expanded={isStartOpen}
          >
            {/* 4-Color Pastel Windows Logo */}
            <div className="start-logo-icon">
              <span className="logo-sq sq-pink" />
              <span className="logo-sq sq-mint" />
              <span className="logo-sq sq-blue" />
              <span className="logo-sq sq-gold" />
            </div>
            <span className="start-btn-text">Start</span>
          </button>

          {/* Running Program Tabs */}
          <div className="taskbar-tabs-list">
            {/* Welcome.exe */}
            <button
              className={`taskbar-tab-btn ${isHome ? 'active-tab' : ''}`}
              onClick={() => navigate('/')}
              title="Welcome.exe"
            >
              <Heart size={14} fill="#E8559A" color="#E8559A" className="tab-icon" />
              <span className="tab-title">Welcome.exe</span>
            </button>

            {/* Projects.exe */}
            <button
              className={`taskbar-tab-btn ${isProjects ? 'active-tab' : ''}`}
              onClick={() => navigate('/projects')}
              title="Projects.exe"
            >
              <Code2 size={14} strokeWidth={2.4} color="#7B61FF" className="tab-icon" />
              <span className="tab-title">Projects.exe</span>
            </button>

            {/* Achievements.exe */}
            <button
              className={`taskbar-tab-btn ${isAchievements ? 'active-tab' : ''}`}
              onClick={() => navigate('/achievements')}
              title="Achievements.exe"
            >
              <Trophy size={14} strokeWidth={2.4} color="#D97706" className="tab-icon" />
              <span className="tab-title">Achievements.exe</span>
            </button>

            {/* Dynamic extra tab for current page if not one of the default three */}
            {isExtraTab && currentNavItem && (
              <button
                className="taskbar-tab-btn active-tab dynamic-tab"
                onClick={() => navigate(currentNavItem.path)}
                title={currentNavItem.windowTitle}
              >
                <span className="tab-icon">{getTabIcon(currentNavItem.iconName)}</span>
                <span className="tab-title">{currentNavItem.windowTitle}</span>
              </button>
            )}
          </div>
        </div>

        {/* Right side: Cat and Battery */}
        <div className="taskbar-right">
          {/* Small cat icon */}
          <div className="taskbar-cat-icon" title="OS Mascot: Mochi">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <circle cx="12" cy="13" r="7.5" fill="#FFF" stroke="#27405A" strokeWidth="1.8" />
              <polygon points="5,7 8,2 11,6" fill="#FFF" stroke="#27405A" strokeWidth="1.8" strokeLinejoin="round" />
              <polygon points="7,6 8,3 10,5" fill="#F7B3CF" />
              <polygon points="13,6 16,2 19,7" fill="#FFF" stroke="#27405A" strokeWidth="1.8" strokeLinejoin="round" />
              <polygon points="14,5 16,3 17,6" fill="#F7B3CF" />
              <circle cx="9.5" cy="12" r="1.2" fill="#27405A" />
              <circle cx="14.5" cy="12" r="1.2" fill="#27405A" />
              <path d="M10.8 15 Q 12 16.2 13.2 15" stroke="#27405A" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Battery Status 99% */}
          <div className="taskbar-battery" title="Battery: 99% (Charging)">
            <Battery size={18} strokeWidth={2.2} color="#27405A" />
            <span className="battery-text">99%</span>
          </div>
        </div>
      </footer>
    </>
  );
};
