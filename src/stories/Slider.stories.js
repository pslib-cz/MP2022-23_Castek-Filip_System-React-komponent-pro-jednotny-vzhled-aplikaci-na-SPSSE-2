/*
    komponenty - formulářové prvky - posuvník (story)
*/
import React from 'react';
import Slider from './Slider';

export default {
  title: 'Form/Slider',
  component: Slider,
};

export const Default = () => <Slider min={5} max={100} />;
