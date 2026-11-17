import React from 'react';
import { Code2, Trophy, Calendar } from 'lucide-react';
import { Window } from '../Window';
import { stats } from '../../data/content';
import './StatsWindow.css';

// Cute Cat face icon for titlebar
const StatsCatIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
    <circle cx="12" cy="13" r="7.5" fill="#FFF" stroke="#2D2A4A" strokeWidth="1.8" />
    <polygon points="5,7 8,2 11,6" fill="#FFF" stroke="#2D2A4A" strokeWidth="1.8" strokeLinejoin="round" />
    <polygon points="13,6 16,2 19,7" fill="#FFF" stroke="#2D2A4A" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="9.5" cy="12" r="1.2" fill="#2D2A4A" />
    <circle cx="14.5" cy="12" r="1.2" fill="#2D2A4A" />
  </svg>
);

export const StatsWindow: React.FC = () => {
  const renderStatIcon = (type: string) => {
    switch (type) {
      case 'code':
        return (
          <div className="stat-icon-circle stat-icon-code">
            <Code2 size={16} strokeWidth={2.4} color="#7B61FF" />
          </div>
        );
      case 'trophy':
        return (
          <div className="stat-icon-circle stat-icon-trophy">
            <Trophy size={16} strokeWidth={2.4} color="#D97706" />
          </div>
        );
      case 'calendar':
        return (
          <div className="stat-icon-circle stat-icon-cal">
            <Calendar size={16} strokeWidth={2.4} color="#E8559A" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Window
      id="win-stats"
      title="Stats.sys"
      variant="pink"
      icon={<StatsCatIcon />}
      className="stats-window"
    >
      <div className="stats-inner">
        {stats.map((stat, idx) => (
          <React.Fragment key={stat.id}>
            <div className="stat-col">
              {renderStatIcon(stat.icon)}
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {idx < stats.length - 1 && <div className="stat-divider" />}
          </React.Fragment>
        ))}
      </div>
    </Window>
  );
};
