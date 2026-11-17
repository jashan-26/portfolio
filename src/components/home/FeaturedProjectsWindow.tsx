import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Window } from '../Window';
import { projects } from '../../data/content';
import './FeaturedProjectsWindow.css';

export const FeaturedProjectsWindow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Autoplay every 6 seconds, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[activeIndex];

  return (
    <Window
      id="win-featured-projects"
      title="Featured_Projects.exe"
      variant="mint"
      icon={<Star size={13} fill="#6FC4A9" color="#6FC4A9" />}
      className="featured-projects-window"
    >
      <div
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate('/projects')}
        title="Click to view all Projects"
      >
        {/* Left Arrow Button */}
        <button
          className="carousel-arrow arrow-left"
          onClick={handlePrev}
          title="Previous Project"
          aria-label="Previous Project"
        >
          <ChevronLeft size={16} strokeWidth={2.8} />
        </button>

        {/* Current Project Card */}
        <div className="project-card-wrap">
          <div className="project-thumb-box">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="project-thumb-img"
            />
          </div>

          <div className="project-card-details">
            <span className="project-card-title">{currentProject.title}</span>
            <p className="project-card-desc">{currentProject.description}</p>
            <div className="project-tags-row">
              {currentProject.tags.map((tag, tIdx) => (
                <span key={tIdx} className="project-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          className="carousel-arrow arrow-right"
          onClick={handleNext}
          title="Next Project"
          aria-label="Next Project"
        >
          <ChevronRight size={16} strokeWidth={2.8} />
        </button>

        {/* Indicator Dots */}
        <div className="carousel-dots-row">
          {projects.map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={`carousel-dot ${dotIdx === activeIndex ? 'active-dot' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(dotIdx);
              }}
              aria-label={`Go to project slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </Window>
  );
};
