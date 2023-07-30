// Text.js
import React from 'react';
import './Text.css';

const Text = ({ size, children }) => {
  let fontSize;

  switch (size) {
    case 'big':
      fontSize = '20px';
      break;
    case 'medium':
      fontSize = '17px';
      break;
    case 'small':
      fontSize = '14px';
      break;
    default:
      fontSize = '17px';
      break;
  }

  const style = {
    fontSize,
    width: '100%',
  };

  return <div className="text" style={style}>{children}</div>;
};

export default Text;
