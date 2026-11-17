import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Wallpaper } from './components/Wallpaper';
import { TopMenuBar } from './components/TopMenuBar';
import { LeftDock } from './components/LeftDock';
import { Taskbar } from './components/Taskbar';
import { HelpModals } from './components/HelpModals';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { SkillsPage } from './pages/SkillsPage';
import { EducationPage } from './pages/EducationPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';

import './App.css';

export const App: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape -> Go Home
      if (e.key === 'Escape') {
        navigate('/');
      }
      // ? -> Shortcuts
      if (e.key === '?' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        setIsShortcutsOpen(true);
      }
      // Cmd/Ctrl + K -> Contact
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        navigate('/contact');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="os-desktop-root">
      {/* Full-Bleed Animated Wallpaper */}
      <Wallpaper />

      {/* Top Menu Bar */}
      <TopMenuBar
        onOpenAboutOS={() => setIsAboutOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
      />

      {/* Main Workspace Stage Area */}
      <main className="os-workspace-viewport">
        {/* Left Navigation Dock */}
        <LeftDock />

        {/* 16:9 Scaled Desktop Stage */}
        <div className="os-stage-viewport-center">
          <div className="os-stage-canvas">
            <div className="route-view-container" key={location.pathname}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Taskbar */}
      <Taskbar />

      {/* Help & System Modals */}
      <HelpModals
        isAboutOpen={isAboutOpen}
        onCloseAbout={() => setIsAboutOpen(false)}
        isShortcutsOpen={isShortcutsOpen}
        onCloseShortcuts={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
};

export default App;
