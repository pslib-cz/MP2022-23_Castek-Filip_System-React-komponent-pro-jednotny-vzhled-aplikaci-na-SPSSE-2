import React from 'react';
import './Box.css';

const Box = ({ direction, vertical, horizontal, border, space, bg, justify, align, children }) => {
  let flexDirection;
  let justifyContent;
  let alignItems;
  let backgroundColor;

  if (direction === 'row') {
    flexDirection = 'row';
  } else {
    flexDirection = 'column';
  }

  switch (vertical) {
    case 'top':
      alignItems = 'flex-start';
      break;
    case 'center':
      alignItems = 'center';
      break;
    case 'bottom':
      alignItems = 'flex-end';
      break;
    default:
      alignItems = 'center';
      break;
  }

  switch (horizontal) {
    case 'left':
      justifyContent = 'flex-start';
      break;
    case 'center':
      justifyContent = 'center';
      break;
    case 'right':
      justifyContent = 'flex-end';
      break;
    default:
      justifyContent = 'center';
      break;
  }

  switch (bg) {
    case 'gray':
      backgroundColor = 'lightgray';
      break;
    default:
      backgroundColor = bg;
      break;
  }

  const style = {
    flexDirection,
    justifyContent,
    alignItems,
    border: border === 'solid' ? '1px solid black' : 'none',
    padding: space === 'small' ? '3px' : space === 'medium' ? '6px' : space === 'large' ? '10px' : '0',
    backgroundColor,
    display: 'flex',
    width: '100%',
    height: '100%',
  };

  return (
    <div className="box" style={style}>
      {children}
    </div>
  );
};

export default Box;
