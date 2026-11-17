import React from 'react';
import { X, Heart, Keyboard, Sparkles } from 'lucide-react';
import './HelpModals.css';

interface HelpModalsProps {
  isAboutOpen: boolean;
  onCloseAbout: () => void;
  isShortcutsOpen: boolean;
  onCloseShortcuts: () => void;
}

export const HelpModals: React.FC<HelpModalsProps> = ({
  isAboutOpen,
  onCloseAbout,
  isShortcutsOpen,
  onCloseShortcuts,
}) => {
  return (
    <>
      {/* About This OS Modal */}
      {isAboutOpen && (
        <div className="modal-backdrop" onClick={onCloseAbout}>
          <div
            className="modal-window window-mint"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="About Jashan.exe OS"
          >
            <div className="window-titlebar">
              <div className="window-title-left">
                <Sparkles size={14} color="#27405A" />
                <span className="window-title-text">About_Jashan_OS.sys</span>
              </div>
              <button
                className="win-btn win-btn-close"
                onClick={onCloseAbout}
                aria-label="Close"
              >
                <X size={12} strokeWidth={2.8} />
              </button>
            </div>

            <div className="modal-content-body">
              <div className="modal-avatar-header">
                <img src="./assets/hero-girl.webp" alt="Jashan" className="modal-avatar-img" />
                <div>
                  <h3 className="modal-title">Jashan.exe – Portfolio OS</h3>
                  <p className="modal-version">Version 2.0 (Cosmic Pastel Edition)</p>
                  <p className="modal-author">Designed & Built for Jashanpreet Kaur</p>
                </div>
              </div>

              <div className="modal-divider" />

              <p className="modal-text">
                Welcome to <strong>Jashan.exe</strong>, a cute pastel desktop operating system
                crafted for showcasing AI/ML projects, academic research, and engineering achievements.
              </p>

              <div className="modal-badge-row">
                <span className="modal-tag">React 18</span>
                <span className="modal-tag">TypeScript</span>
                <span className="modal-tag">Vite</span>
                <span className="modal-tag">Container Queries</span>
              </div>

              <div className="modal-footer-love">
                <span>Handcrafted with</span>
                <Heart size={14} fill="#E8559A" color="#E8559A" />
                <span>for the Cosmos</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Modal */}
      {isShortcutsOpen && (
        <div className="modal-backdrop" onClick={onCloseShortcuts}>
          <div
            className="modal-window window-mint"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Keyboard Shortcuts"
          >
            <div className="window-titlebar">
              <div className="window-title-left">
                <Keyboard size={14} color="#27405A" />
                <span className="window-title-text">Shortcuts.cfg</span>
              </div>
              <button
                className="win-btn win-btn-close"
                onClick={onCloseShortcuts}
                aria-label="Close"
              >
                <X size={12} strokeWidth={2.8} />
              </button>
            </div>

            <div className="modal-content-body">
              <h3 className="shortcuts-heading">Keyboard Shortcuts</h3>
              <div className="shortcuts-table">
                <div className="shortcut-row">
                  <span className="shortcut-action">Return to Desktop Home</span>
                  <kbd className="shortcut-key">Esc</kbd>
                </div>
                <div className="shortcut-row">
                  <span className="shortcut-action">Toggle Fullscreen Stage</span>
                  <kbd className="shortcut-key">F11</kbd>
                </div>
                <div className="shortcut-row">
                  <span className="shortcut-action">Copy Email to Clipboard</span>
                  <kbd className="shortcut-key">⌘ / Ctrl + C</kbd>
                </div>
                <div className="shortcut-row">
                  <span className="shortcut-action">Open Contact Terminal</span>
                  <kbd className="shortcut-key">⌘ / Ctrl + K</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
