import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
} from 'lucide-react';
import { Window } from '../Window';
import { currentTrack } from '../../data/content';
import './NowPlayingWindow.css';

export const NowPlayingWindow: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(currentTrack.initialTimeSeconds);
  const [isLiked, setIsLiked] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Format seconds to M:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder.toString().padStart(2, '0')}`;
  };

  // Timer advancement when playing
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= currentTrack.durationSeconds) {
            if (isRepeat) {
              return 0;
            } else {
              setIsPlaying(false);
              return 0;
            }
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, isRepeat]);

  // Audio play/pause handler
  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);

    // Try optional audio element if file exists
    if (audioRef.current) {
      if (nextState) {
        audioRef.current.play().catch(() => {
          // Fallback gracefully if browser policy blocks autoplay
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSec = Number(e.target.value);
    setCurrentTimeSec(newSec);
    if (audioRef.current) {
      audioRef.current.currentTime = newSec;
    }
  };

  const handlePrev = () => {
    setCurrentTimeSec(0);
  };

  const handleNext = () => {
    setCurrentTimeSec(Math.min(currentTimeSec + 15, currentTrack.durationSeconds));
  };

  const progressPercent = (currentTimeSec / currentTrack.durationSeconds) * 100;

  return (
    <Window
      id="win-now-playing"
      title="Now_Playing.mp3"
      variant="pink"
      icon={<Headphones size={13} color="#E8559A" />}
      className="now-playing-window"
    >
      {/* Optional real audio hook */}
      <audio ref={audioRef} src="/audio/track.mp3" loop={isRepeat} preload="none" />

      <div className="player-inner">
        {/* Album Cover Art */}
        <div className="album-art-wrap">
          <img
            src="./assets/album-art.webp"
            alt="Pink planet in starry night sky"
            className="album-art-img"
          />
        </div>

        {/* Player Controls & Info */}
        <div className="player-content-right">
          {/* Track Header & Equalizer */}
          <div className="track-header-row">
            <span className="track-title">{currentTrack.title}</span>

            {/* Pink Equalizer Animation */}
            <div className={`equalizer-wrap ${isPlaying ? 'is-playing' : ''}`}>
              <span className="eq-bar eq-bar-1" />
              <span className="eq-bar eq-bar-2" />
              <span className="eq-bar eq-bar-3" />
              <span className="eq-bar eq-bar-4" />
            </div>
          </div>

          {/* Progress Bar & Knob */}
          <div className="progress-container">
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
              <div
                className="progress-knob"
                style={{ left: `${progressPercent}%` }}
              />
            </div>
            <input
              type="range"
              min="0"
              max={currentTrack.durationSeconds}
              value={currentTimeSec}
              onChange={handleSeek}
              className="progress-slider-input"
              aria-label="Seek track"
            />
          </div>

          {/* Timestamps */}
          <div className="timestamps-row">
            <span className="time-curr">{formatTime(currentTimeSec)}</span>
            <span className="time-dur">{formatTime(currentTrack.durationSeconds)}</span>
          </div>

          {/* Controls Bar */}
          <div className="player-controls-row">
            <button
              className={`ctrl-btn ${isShuffle ? 'active-ctrl' : ''}`}
              onClick={() => setIsShuffle(!isShuffle)}
              title="Shuffle"
              aria-label="Shuffle"
            >
              <Shuffle size={13} />
            </button>

            <button
              className="ctrl-btn"
              onClick={handlePrev}
              title="Previous"
              aria-label="Previous"
            >
              <SkipBack size={14} />
            </button>

            <button
              className="ctrl-btn-play"
              onClick={togglePlay}
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause size={15} fill="#FFF" color="#FFF" />
              ) : (
                <Play size={15} fill="#FFF" color="#FFF" style={{ marginLeft: 2 }} />
              )}
            </button>

            <button
              className="ctrl-btn"
              onClick={handleNext}
              title="Next"
              aria-label="Next"
            >
              <SkipForward size={14} />
            </button>

            <button
              className={`ctrl-btn ${isRepeat ? 'active-ctrl' : ''}`}
              onClick={() => setIsRepeat(!isRepeat)}
              title="Repeat"
              aria-label="Repeat"
            >
              <Repeat size={13} />
            </button>

            <button
              className={`ctrl-btn-heart ${isLiked ? 'liked' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
              title={isLiked ? 'Liked' : 'Like'}
              aria-label="Like"
            >
              <Heart
                size={14}
                fill={isLiked ? '#E8559A' : 'none'}
                color={isLiked ? '#E8559A' : '#736B8D'}
              />
            </button>
          </div>
        </div>
      </div>
    </Window>
  );
};
