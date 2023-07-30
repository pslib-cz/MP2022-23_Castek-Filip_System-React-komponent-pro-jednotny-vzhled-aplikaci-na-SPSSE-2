import React from 'react';
import './Wrap.css';

const Wrap = ({ children }) => {
  return (
    <div className="wrap-container">
      {children}
    </div>
  );
};

export default Wrap;
