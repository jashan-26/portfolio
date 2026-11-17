import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Window, type WindowVariant } from './Window';
import './InnerPageWindow.css';

interface InnerPageWindowProps {
  title: string;
  icon?: React.ReactNode;
  variant?: WindowVariant;
  children: React.ReactNode;
}

export const InnerPageWindow: React.FC<InnerPageWindowProps> = ({
  title,
  icon,
  variant = 'mint',
  children,
}) => {
  const navigate = useNavigate();

  return (
    <div className="inner-page-stage">
      <div className="inner-window-wrapper">
        <Window
          title={title}
          icon={icon}
          variant={variant}
          className="inner-page-window"
          bodyClassName="inner-page-body"
          onClose={() => navigate('/')}
        >
          {children}
        </Window>
      </div>
    </div>
  );
};
