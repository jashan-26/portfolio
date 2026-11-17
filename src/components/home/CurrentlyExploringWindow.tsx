import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { Window } from '../Window';
import { currentlyExploring } from '../../data/content';
import './CurrentlyExploringWindow.css';

export const CurrentlyExploringWindow: React.FC = () => {
  const [items, setItems] = useState(currentlyExploring);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <Window
      id="win-currently-exploring"
      title="Currently_Exploring.exe"
      variant="mint"
      icon={<Sparkles size={13} fill="#6FC4A9" color="#6FC4A9" />}
      className="currently-exploring-window"
    >
      <div className="exploring-inner">
        {/* Left: Checklist */}
        <div className="exploring-checklist">
          {items.map((item) => (
            <label
              key={item.id}
              className="exploring-checkbox-row"
              onClick={(e) => {
                e.preventDefault();
                toggleItem(item.id);
              }}
            >
              <div className={`custom-checkbox ${item.checked ? 'is-checked' : ''}`}>
                {item.checked && <Check size={11} strokeWidth={3.5} color="#FFFFFF" />}
              </div>
              <span className={`checkbox-label ${item.checked ? 'label-checked' : ''}`}>
                {item.label}
              </span>
            </label>
          ))}
        </div>

        {/* Right: Telescope Illustration */}
        <div className="telescope-wrap" title="Looking towards the stars">
          <img
            src="./assets/telescope.svg"
            alt="Telescope on a tripod observing the cosmos"
            className="telescope-svg"
          />
        </div>
      </div>
    </Window>
  );
};
