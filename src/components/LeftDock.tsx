import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Monitor,
  Briefcase,
  Code2,
  Trophy,
  Settings,
  GraduationCap,
  Award,
  FileText,
  Mail,
} from 'lucide-react';
import { navItems, CONFIG } from '../data/content';
import './LeftDock.css';

// Custom Cat Icon for About Me
const CatDockIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <circle cx="12" cy="14" r="8" fill="#FFF" stroke="#2D2A4A" strokeWidth="1.8" />
    <polygon points="5,7 8,2 11,6" fill="#FFF" stroke="#2D2A4A" strokeWidth="1.8" strokeLinejoin="round" />
    <polygon points="7,6 8,3 10,5" fill="#F7B3CF" />
    <polygon points="13,6 16,2 19,7" fill="#FFF" stroke="#2D2A4A" strokeWidth="1.8" strokeLinejoin="round" />
    <polygon points="14,5 16,3 17,6" fill="#F7B3CF" />
    <circle cx="9" cy="13" r="1.2" fill="#2D2A4A" />
    <circle cx="15" cy="13" r="1.2" fill="#2D2A4A" />
    <path d="M10.5 16.5 Q 12 18 13.5 16.5" stroke="#2D2A4A" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const renderIcon = (iconName: string) => {
  const strokeWidth = 2.2;
  const size = 20;
  switch (iconName) {
    case 'Monitor':
      return <Monitor size={size} strokeWidth={strokeWidth} color="#2D2A4A" />;
    case 'Cat':
      return <CatDockIcon />;
    case 'Briefcase':
      return <Briefcase size={size} strokeWidth={strokeWidth} color="#2D2A4A" />;
    case 'Code2':
      return <Code2 size={size} strokeWidth={strokeWidth} color="#2D2A4A" />;
    case 'Trophy':
      return <Trophy size={size} strokeWidth={strokeWidth} color="#D97706" />;
    case 'Settings':
      return <Settings size={size} strokeWidth={strokeWidth} color="#2D2A4A" />;
    case 'GraduationCap':
      return <GraduationCap size={size} strokeWidth={strokeWidth} color="#2D2A4A" />;
    case 'Award':
      return <Award size={size} strokeWidth={strokeWidth} color="#E8559A" />;
    case 'FileText':
      return <FileText size={size} strokeWidth={strokeWidth} color="#2D2A4A" />;
    case 'Mail':
      return <Mail size={size} strokeWidth={strokeWidth} color="#E8559A" />;
    default:
      return <Monitor size={size} strokeWidth={strokeWidth} color="#2D2A4A" />;
  }
};

const getIconBgGradient = (id: string) => {
  switch (id) {
    case 'home':
      return 'linear-gradient(135deg, #CFE7FA 0%, #B2D8F8 100%)';
    case 'about':
      return 'linear-gradient(135deg, #FDE2ED 0%, #F8B4D9 100%)';
    case 'experience':
      return 'linear-gradient(135deg, #EBE0FF 0%, #D4C2FC 100%)';
    case 'projects':
      return 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)';
    case 'achievements':
      return 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)';
    case 'skills':
      return 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)';
    case 'education':
      return 'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)';
    case 'certifications':
      return 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)';
    case 'resume':
      return 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)';
    case 'contact':
      return 'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 100%)';
    default:
      return 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)';
  }
};

export const LeftDock: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (item: typeof navItems[0]) => {
    if (CONFIG.OPEN_IN_NEW_BROWSER_TAB && item.path !== '/') {
      window.open(`#${item.path}`, '_blank');
      return;
    }
    navigate(item.path);
  };

  return (
    <aside className="left-dock-container" aria-label="Desktop Navigation Dock">
      <div className="left-dock-inner">
        {navItems.map((item) => {
          const isActive =
            item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

          return (
            <button
              key={item.id}
              className={`dock-item-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => handleItemClick(item)}
              aria-label={`Open ${item.name}`}
              title={item.name}
            >
              {/* Pastel Icon Box */}
              <div
                className="dock-icon-box"
                style={{ background: getIconBgGradient(item.id) }}
              >
                {renderIcon(item.iconName)}
              </div>

              {/* White Pill Label */}
              <div className={`dock-pill-label ${isActive ? 'active-pill' : ''}`}>
                <span>{item.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
