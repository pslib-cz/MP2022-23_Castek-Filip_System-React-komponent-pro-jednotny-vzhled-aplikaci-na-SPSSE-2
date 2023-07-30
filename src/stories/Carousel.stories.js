import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Structures/Carousel',
  component: Carousel,
};

export const Default = () => (
  <Carousel
    img1="https://via.placeholder.com/300"
    img2="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Green_008000_300x300.svg/1024px-Green_008000_300x300.svg.png"
    img3="https://via.placeholder.com/300"
    text1="Název 1"
    text2="dvojka 2"
    text3="XD 3"
  />
);
