import React from 'react';
import { WelcomeWindow } from '../components/home/WelcomeWindow';
import { StatsWindow } from '../components/home/StatsWindow';
import { NowPlayingWindow } from '../components/home/NowPlayingWindow';
import { AboutMeWindow } from '../components/home/AboutMeWindow';
import { FeaturedProjectsWindow } from '../components/home/FeaturedProjectsWindow';
import { CurrentlyExploringWindow } from '../components/home/CurrentlyExploringWindow';
import { ActivityLogWindow } from '../components/home/ActivityLogWindow';
import { AchievementsWindow } from '../components/home/AchievementsWindow';
import { ToDoWindow } from '../components/home/ToDoWindow';
import { SleepingCat } from '../components/home/SleepingCat';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-stage-container">
      {/* 1. Welcome.exe */}
      <div
        className="stage-win-slot slot-welcome"
        style={{ left: '17.9%', top: '7.2%', width: '45.8%', height: '43.6%' }}
      >
        <WelcomeWindow />
      </div>

      {/* 2. Stats.sys */}
      <div
        className="stage-win-slot slot-stats"
        style={{ left: '65.9%', top: '8.0%', width: '22.6%', height: '17.3%' }}
      >
        <StatsWindow />
      </div>

      {/* 3. Now_Playing.mp3 */}
      <div
        className="stage-win-slot slot-player"
        style={{ left: '65.9%', top: '27.5%', width: '22.6%', height: '22.0%' }}
      >
        <NowPlayingWindow />
      </div>

      {/* 4. About_Me.exe */}
      <div
        className="stage-win-slot slot-about"
        style={{ left: '13.6%', top: '53.3%', width: '23.1%', height: '20.5%' }}
      >
        <AboutMeWindow />
      </div>

      {/* 5. Featured_Projects.exe */}
      <div
        className="stage-win-slot slot-projects"
        style={{ left: '38.3%', top: '53.3%', width: '28.4%', height: '20.5%' }}
      >
        <FeaturedProjectsWindow />
      </div>

      {/* 6. Currently_Exploring.exe */}
      <div
        className="stage-win-slot slot-exploring"
        style={{ left: '68.1%', top: '53.3%', width: '22.3%', height: '20.5%' }}
      >
        <CurrentlyExploringWindow />
      </div>

      {/* 7. Activity.log */}
      <div
        className="stage-win-slot slot-activity"
        style={{ left: '12.2%', top: '75.0%', width: '22.1%', height: '17.5%' }}
      >
        <ActivityLogWindow />
      </div>

      {/* 8. Achievements.exe */}
      <div
        className="stage-win-slot slot-achievements"
        style={{ left: '36.0%', top: '75.0%', width: '30.7%', height: '17.5%' }}
      >
        <AchievementsWindow />
      </div>

      {/* 9. To_Do.exe */}
      <div
        className="stage-win-slot slot-todo"
        style={{ left: '68.1%', top: '75.0%', width: '17.8%', height: '17.5%' }}
      >
        <ToDoWindow />
      </div>

      {/* Decorative Sleeping Cat on Cloud */}
      <div className="stage-win-slot slot-cat">
        <SleepingCat />
      </div>
    </div>
  );
};
