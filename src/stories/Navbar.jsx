// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ orientation = 'horizontal', children }) => {
  const getOrientationClass = () => {
    return orientation === 'vertical' ? 'vertical' : 'horizontal';
  };

  return <nav className={`navbar ${getOrientationClass()}`}>{children}</nav>;
};

export default Navbar;
