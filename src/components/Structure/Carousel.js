import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ img1, img2, img3, text1, text2, text3 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img1, img2, img3];
  const texts = [text1, text2, text3];

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="main-image">
        <img src={images[currentImageIndex]} alt="Main" />
        <div className="image-text">{texts[currentImageIndex]}</div>
      </div>
      <div className="buttons">
        {texts.map((text, index) => (
          <button
            key={index}
            className={`button ${currentImageIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
            disabled={currentImageIndex === index}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
