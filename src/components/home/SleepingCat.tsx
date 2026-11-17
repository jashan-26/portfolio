import React from 'react';
import './SleepingCat.css';

export const SleepingCat: React.FC = () => {
  return (
    <div
      className="decorative-sleeping-cat"
      title="Shh... Mochi is taking a catnap z z Z"
      aria-hidden="true"
    >
      <img
        src="./assets/sleeping-cat.svg"
        alt=""
        className="sleeping-cat-img"
      />
    </div>
  );
};
