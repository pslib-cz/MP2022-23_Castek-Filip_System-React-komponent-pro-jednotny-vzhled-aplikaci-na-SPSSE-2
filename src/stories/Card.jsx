import React from 'react';
import './Card.css';
import Image from './Image'; // Import the Image component

const Card = ({ size, topMsg, botMsg, children }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'small';
      case 'medium':
        return 'medium';
      case 'large':
        return 'large';
      default:
        return 'medium';
    }
  };

  return (
    <div className={`card ${getSizeClass()}`}>
      <div className="stripe top-stripe">
        {topMsg && <div className="stripe-msg">{topMsg}</div>}
      </div>
      <div className="content">
        {children} {/* This will render the content inside the Card component */}
      </div>
      <div className="stripe bottom-stripe">
        {botMsg && <div className="stripe-msg">{botMsg}</div>}
      </div>
    </div>
  );
};

export default Card;
