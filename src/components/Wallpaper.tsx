import React from 'react';
import './Wallpaper.css';

export const Wallpaper: React.FC = () => {
  return (
    <div className="os-wallpaper" aria-hidden="true">
      {/* Sky Gradient Layer */}
      <div className="sky-gradient" />

      {/* Twinkling Stars & Sparkles */}
      <img
        src="./assets/sparkles.svg"
        alt=""
        className="wallpaper-sparkles star-twinkle"
      />

      {/* Small Ringed Planet (Top Left) */}
      <div className="decor-planet-small-ringed">
        <img src="./assets/planet-ringed.svg" alt="" />
      </div>

      {/* Large Pink Planet (Left, partly behind Welcome window) */}
      <div className="decor-planet-large-left">
        <img src="./assets/planet-large.svg" alt="" />
      </div>

      {/* Large Ringed Planet (Top Right) */}
      <div className="decor-planet-ringed-right">
        <img src="./assets/planet-ringed.svg" alt="" />
      </div>

      {/* Cartoon Space Rocket (Right edge) */}
      <div className="decor-rocket float-rocket">
        <img src="./assets/rocket.svg" alt="" />
      </div>

      {/* Lavender City Skyline Silhouette (Bottom Left) */}
      <div className="decor-skyline">
        <img src="./assets/skyline.svg" alt="" />
      </div>

      {/* Puffy Pink Clouds (Bottom edge) */}
      <div className="decor-clouds">
        <img src="./assets/clouds.svg" alt="" />
      </div>
    </div>
  );
};
