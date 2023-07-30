import React from 'react';
import './Warning.css';

const Warning = ({ intensity, children }) => {
  let backgroundColor, borderColor;

  switch (intensity) {
    case 'low':
      backgroundColor = 'yellow';
      borderColor = 'black';
      break;
    case 'medium':
      backgroundColor = 'orange';
      borderColor = 'black';
      break;
    case 'high':
      backgroundColor = 'red';
      borderColor = 'black';
      break;
    default:
      backgroundColor = 'yellow';
      borderColor = 'black';
      break;
  }

  const style = {
    backgroundColor,
    borderColor,
  };

  return <div className="warning" style={style}>{children}</div>;
};

export default Warning;
