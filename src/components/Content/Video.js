// Video.js
import React, { useState, useRef } from 'react';
import './Video.css';

const Video = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-container" onClick={togglePlayPause}>
      <video ref={videoRef} className="video" src={src} loop />
      <div className={`play-pause-icon ${isPlaying ? 'playing' : 'paused'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
          <path d="M6 4l15 8-15 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Video;
