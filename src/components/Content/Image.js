import React from 'react';
import './Image.css';

const Image = ({ src, markup }) => {
  return (
    <div className="image-container">
      <img src={src} alt="Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <div className="strip">{markup}</div>
    </div>
  );
};

export default Image;
