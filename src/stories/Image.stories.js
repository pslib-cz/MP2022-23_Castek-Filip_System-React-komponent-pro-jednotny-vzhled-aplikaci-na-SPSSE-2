// src/Image.stories.js

import React from 'react';
import Image from './Image';

export default {
  title: 'Content/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x400', // Default image URL
  markup: 'Your Text Here', // Default text for the strip
};

export const CustomImage = Template.bind({});
CustomImage.args = {
  src: 'https://via.placeholder.com/600x300', // Custom image URL
  markup: 'Custom Image Text', // Custom text for the strip
};

export const AnotherImage = Template.bind({});
AnotherImage.args = {
  src: 'https://via.placeholder.com/400x200', // Another image URL
  markup: 'Another Image Text', // Text for the strip of the another image
};
