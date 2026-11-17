import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Volume2, VolumeX, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { profile, navItems } from '../data/content';
import './TopMenuBar.css';

interface TopMenuBarProps {
  onOpenShortcuts?: () => void;
  onOpenAboutOS?: () => void;
  isMuted?: boolean;
  onToggleMute?: () => void;
}

export const TopMenuBar: React.FC<TopMenuBarProps> = ({
  onOpenShortcuts,
  onOpenAboutOS,
  isMuted = false,
  onToggleMute,
}) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const menuBarRef = useRef<HTMLDivElement>(null);

  // Live Clock (Tue, Nov 14  11:59 PM)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const day = days[now.getDay()];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = months[now.getMonth()];
      const date = now.getDate();

      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // 0 becomes 12

      setCurrentTime(`${day}, ${month} ${date}  ${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuBarRef.current && !menuBarRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      setActiveMenu(null);
    }, 1500);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
    setActiveMenu(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setActiveMenu(null);
  };

  return (
    <header className="top-menu-bar" ref={menuBarRef} role="banner">
      {/* Left side */}
      <div className="top-menu-left">
        {/* Cat Face Icon Button */}
        <button
          className="menu-cat-btn"
          onClick={() => handleNavigate('/')}
          title="Return to Desktop Home"
          aria-label="Home"
        >
          <svg className="cat-svg" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="18" r="10" fill="#FFF" stroke="#27405A" strokeWidth="2" />
            <polygon points="7,10 11,3 15,9" fill="#FFF" stroke="#27405A" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="9,9 11,5 13,9" fill="#F7B3CF" />
            <polygon points="17,9 21,3 25,10" fill="#FFF" stroke="#27405A" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="19,9 21,5 23,9" fill="#F7B3CF" />
            <circle cx="12" cy="16" r="1.5" fill="#27405A" />
            <circle cx="20" cy="16" r="1.5" fill="#27405A" />
            <polygon points="16,19 17,20 15,20" fill="#F7B3CF" />
            <path d="M14 21 Q 16 23 18 21" stroke="#27405A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Title */}
        <span className="os-title" onClick={() => handleNavigate('/')}>
          Jashan.exe – Portfolio OS
        </span>

        {/* Menu Items */}
        <nav className="menu-nav" aria-label="Main Menu">
          {/* File Menu */}
          <div className="menu-item-wrap">
            <button
              className={`menu-item-btn ${activeMenu === 'file' ? 'active' : ''}`}
              onClick={() => toggleMenu('file')}
              aria-expanded={activeMenu === 'file'}
            >
              File
            </button>
            {activeMenu === 'file' && (
              <div className="menu-dropdown">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    window.open(profile.resumeUrl, '_blank');
                    setActiveMenu(null);
                  }}
                >
                  <span>Open Resume</span>
                  <span className="shortcut-hint">PDF</span>
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavigate('/contact')}
                >
                  <span>Contact</span>
                  <span className="shortcut-hint">⌘K</span>
                </button>
                <div className="dropdown-divider" />
                <button
                  className="dropdown-item"
                  onClick={() => handleNavigate('/')}
                >
                  <span>Close Window</span>
                  <span className="shortcut-hint">Esc</span>
                </button>
              </div>
            )}
          </div>

          {/* Edit Menu */}
          <div className="menu-item-wrap">
            <button
              className={`menu-item-btn ${activeMenu === 'edit' ? 'active' : ''}`}
              onClick={() => toggleMenu('edit')}
              aria-expanded={activeMenu === 'edit'}
            >
              Edit
            </button>
            {activeMenu === 'edit' && (
              <div className="menu-dropdown">
                <button className="dropdown-item" onClick={handleCopyEmail}>
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                  {copiedEmail ? (
                    <Check size={14} color="#6FC4A9" />
                  ) : (
                    <span className="shortcut-hint">⌘C</span>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* View Menu */}
          <div className="menu-item-wrap">
            <button
              className={`menu-item-btn ${activeMenu === 'view' ? 'active' : ''}`}
              onClick={() => toggleMenu('view')}
              aria-expanded={activeMenu === 'view'}
            >
              View
            </button>
            {activeMenu === 'view' && (
              <div className="menu-dropdown">
                <button className="dropdown-item" onClick={toggleFullscreen}>
                  <span>{isFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}</span>
                  <span className="shortcut-hint">F11</span>
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    handleNavigate('/');
                  }}
                >
                  <span>Reset Desktop Layout</span>
                </button>
              </div>
            )}
          </div>

          {/* Go Menu */}
          <div className="menu-item-wrap">
            <button
              className={`menu-item-btn ${activeMenu === 'go' ? 'active' : ''}`}
              onClick={() => toggleMenu('go')}
              aria-expanded={activeMenu === 'go'}
            >
              Go
            </button>
            {activeMenu === 'go' && (
              <div className="menu-dropdown menu-dropdown-wide">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => handleNavigate(item.path)}
                  >
                    <span>{item.name}</span>
                    <span className="shortcut-hint">{item.windowTitle}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Help Menu */}
          <div className="menu-item-wrap">
            <button
              className={`menu-item-btn ${activeMenu === 'help' ? 'active' : ''}`}
              onClick={() => toggleMenu('help')}
              aria-expanded={activeMenu === 'help'}
            >
              Help
            </button>
            {activeMenu === 'help' && (
              <div className="menu-dropdown">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    onOpenAboutOS?.();
                    setActiveMenu(null);
                  }}
                >
                  <span>About this site</span>
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    onOpenShortcuts?.();
                    setActiveMenu(null);
                  }}
                >
                  <span>Keyboard shortcuts</span>
                  <span className="shortcut-hint">?</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Right side */}
      <div className="top-menu-right">
        {/* Wifi Status */}
        <span className="status-icon" title="Connected to Galaxy-WiFi 5G">
          <Wifi size={16} strokeWidth={2.4} />
        </span>

        {/* Speaker / Volume */}
        <button
          className="status-icon-btn"
          onClick={onToggleMute}
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
        >
          {isMuted ? (
            <VolumeX size={16} strokeWidth={2.4} />
          ) : (
            <Volume2 size={16} strokeWidth={2.4} />
          )}
        </button>

        {/* Live Clock */}
        <span className="live-clock" aria-label={`Current date and time: ${currentTime}`}>
          {currentTime || 'Tue, Nov 14  11:59 PM'}
        </span>
      </div>
    </header>
  );
};
