// Title.js
import React from 'react';
import './Title.css';

const Title = ({ level, children }) => {
  let fontSize, fontStyle, textDecoration, fontWeight, paddingLeft;

  switch (level) {
    case '1':
      fontSize = '30px';
      fontStyle = 'normal';
      textDecoration = 'underline';
      fontWeight = 'bold';
      paddingLeft = '20px';
      break;
    case '2':
      fontSize = '25px';
      fontStyle = 'italic';
      textDecoration = 'none';
      fontWeight = 'bold';
      paddingLeft = '0';
      break;
    case '3':
      fontSize = '20px';
      fontStyle = 'normal';
      textDecoration = 'underline';
      fontWeight = 'normal';
      paddingLeft = '20px';
      break;
    case '4':
      fontSize = '20px';
      fontStyle = 'italic';
      textDecoration = 'none';
      fontWeight = 'bold';
      paddingLeft = '30px';
      break;
    default:
      fontSize = '20px';
      fontStyle = 'normal';
      textDecoration = 'underline';
      fontWeight = 'normal';
      paddingLeft = '0';
      break;
  }

  const style = {
    width: '100%', // Add width to 100% of parent container
    fontSize,
    fontStyle,
    textDecoration,
    fontWeight,
    paddingLeft,
    textAlign: level === '1' ? 'center' : 'left',
  };

  return <div className="title" style={style}>{children}</div>;
};

export default Title;
