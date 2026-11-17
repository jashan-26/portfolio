import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Heart, Code2, Mic } from 'lucide-react';
import { Window } from '../Window';
import { achievements } from '../../data/content';
import './AchievementsWindow.css';

export const AchievementsWindow: React.FC = () => {
  const navigate = useNavigate();

  const renderIcon = (type: string, color: string) => {
    const size = 18;
    switch (type) {
      case 'heart':
        return <Heart size={size} fill={color} color={color} />;
      case 'trophy':
        return <Trophy size={size} strokeWidth={2.4} color={color} />;
      case 'code':
        return <Code2 size={size} strokeWidth={2.4} color={color} />;
      case 'mic':
        return <Mic size={size} strokeWidth={2.4} color={color} />;
      default:
        return <Trophy size={size} color={color} />;
    }
  };

  return (
    <Window
      id="win-achievements"
      title="Achievements.exe"
      variant="mint"
      icon={<Trophy size={13} color="#D97706" />}
      className="achievements-window cursor-pointer"
      onClick={() => navigate('/achievements')}
    >
      <div className="achievements-inner">
        {achievements.map((item) => (
          <div key={item.id} className="achievement-card">
            <div className="ach-icon-circle">
              {renderIcon(item.icon, item.iconColor)}
            </div>
            <span className="ach-card-label">{item.title}</span>
          </div>
        ))}
      </div>
    </Window>
  );
};
