import React from 'react';
import './Side.css';

const Side = ({ children }) => {
  return (
    <div className="side-container">
      {children}
    </div>
  );
};

export default Side;
