import React, { useState } from 'react';
import { Minus, Square, X } from 'lucide-react';
import './Window.css';

export type WindowVariant = 'pink' | 'mint' | 'terminal';

interface WindowProps {
  id?: string;
  title: string;
  icon?: React.ReactNode;
  variant?: WindowVariant;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  isMinimized?: boolean;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  onClick?: () => void;
  bodyClassName?: string;
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  icon,
  variant = 'mint',
  className = '',
  style,
  children,
  isMinimized: controlledMinimized,
  onMinimize,
  onMaximize,
  onClose,
  onClick,
  bodyClassName = '',
}) => {
  const [internalMinimized, setInternalMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const isMinimized = controlledMinimized !== undefined ? controlledMinimized : internalMinimized;

  if (isClosed) return null;

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMinimize) {
      onMinimize();
    } else {
      setInternalMinimized(!internalMinimized);
    }
  };

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMaximize) {
      onMaximize();
    } else {
      setIsMaximized(!isMaximized);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    } else {
      setIsClosed(true);
    }
  };

  return (
    <article
      id={id}
      className={`os-window window-${variant} ${isMinimized ? 'is-minimized' : ''} ${
        isMaximized ? 'is-maximized' : ''
      } ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Title Bar */}
      <div className="window-titlebar">
        <div className="window-title-left">
          {icon && <span className="window-title-icon">{icon}</span>}
          <span className="window-title-text">{title}</span>
        </div>

        {/* 3 Window Control Buttons */}
        <div className="window-controls">
          <button
            className="win-btn win-btn-minimize"
            onClick={handleMinimize}
            title={isMinimized ? 'Restore' : 'Minimize'}
            aria-label="Minimize"
          >
            <Minus size={11} strokeWidth={2.8} />
          </button>
          <button
            className="win-btn win-btn-maximize"
            onClick={handleMaximize}
            title={isMaximized ? 'Restore' : 'Maximize'}
            aria-label="Maximize"
          >
            <Square size={9} strokeWidth={2.5} />
          </button>
          <button
            className="win-btn win-btn-close"
            onClick={handleClose}
            title="Close"
            aria-label="Close"
          >
            <X size={11} strokeWidth={2.8} />
          </button>
        </div>
      </div>

      {/* Window Body */}
      {!isMinimized && (
        <div className={`window-body ${bodyClassName}`}>{children}</div>
      )}
    </article>
  );
};
