import React from 'react';
import './Footer.css';

const Footer = ({ leftContent, centerContent, rightContent }) => {
  const footerStyle = {
    backgroundColor: 'lightgray',
    padding: '7px 10px 7px 10px',
    height: 'auto',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 'calc(100% - 20px)',
    maxWidth: '100%',
    maxHeight: '150px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 999,
  };

  return (
    <footer style={footerStyle}>
      <div style={{ textAlign: 'left' }}>{leftContent}</div>
      <div style={{ textAlign: 'center' }}>{centerContent}</div>
      <div style={{ textAlign: 'right' }}>{rightContent}</div>
    </footer>
  );
};

export default Footer;
