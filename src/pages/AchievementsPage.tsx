import React from 'react';
import { Trophy, Heart, Code2, Mic } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { achievements } from '../data/content';
import './AchievementsPage.css';

export const AchievementsPage: React.FC = () => {
  const renderIcon = (type: string, color: string) => {
    const size = 26;
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
    <InnerPageWindow
      title="Achievements.exe"
      variant="mint"
      icon={<Trophy size={15} strokeWidth={2.4} color="#D97706" />}
    >
      <div className="achievements-page-inner">
        <div className="page-header-block">
          <h2 className="page-heading">Honors & Achievements</h2>
          <p className="page-subheading">
            Scholarships, national competitions, hackathons, and public leadership.
          </p>
        </div>

        <div className="achievements-grid-lg">
          {achievements.map((item) => (
            <div key={item.id} className="achievement-card-lg">
              <div
                className="ach-icon-circle-lg"
                style={{ borderColor: item.iconColor }}
              >
                {renderIcon(item.icon, item.iconColor)}
              </div>

              <div className="ach-details-lg">
                <h3 className="ach-title-lg">{item.title}</h3>
                <p className="ach-desc-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPageWindow>
  );
};
