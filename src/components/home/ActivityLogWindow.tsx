import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Window } from '../Window';
import { activityLogs } from '../../data/content';
import './ActivityLogWindow.css';

export const ActivityLogWindow: React.FC = () => {
  const [animatedProgress, setAnimatedProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Total segments in progress bar (10 blocks)
  const totalBlocks = 10;

  return (
    <Window
      id="win-activity-log"
      title="Activity.log"
      variant="terminal"
      icon={<Terminal size={13} color="#27405A" />}
      className="activity-log-window"
    >
      <div className="terminal-inner font-mono">
        {activityLogs.map((item) => {
          const filledCount = animatedProgress
            ? Math.round((item.percent / 100) * totalBlocks)
            : 0;

          return (
            <div key={item.id} className="terminal-row">
              <span className="term-prompt">{`> ${item.label}`}</span>

              <span className="term-dots"></span>

              <div className="term-blocks-wrap">
                {Array.from({ length: totalBlocks }).map((_, bIdx) => (
                  <span
                    key={bIdx}
                    className={`term-block ${bIdx < filledCount ? 'is-filled' : 'is-empty'}`}
                    style={{
                      transitionDelay: `${bIdx * 40}ms`,
                    }}
                  />
                ))}
              </div>

              <span className="term-percent">
                {animatedProgress ? `${item.percent}%` : '0%'}
              </span>
            </div>
          );
        })}
      </div>
    </Window>
  );
};
