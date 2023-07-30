// NavItem.js
import React from 'react';
import './NavItem.css';

const NavItem = ({ text, link }) => {
  return (
    <a href={link} className="nav-item">
      {text}
    </a>
  );
};

export default NavItem;
