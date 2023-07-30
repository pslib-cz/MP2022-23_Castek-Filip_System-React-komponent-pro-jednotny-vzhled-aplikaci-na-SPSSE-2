// Warning.stories.js

import React from 'react';
import Warning from './Warning';

export default {
  title: 'TextFolder/Warning',
  component: Warning,
};

const Template = (args) => <Warning {...args} />;

export const LowIntensity = Template.bind({});
LowIntensity.args = {
  intensity: 'low',
  children: 'This is a low intensity warning.',
};

export const MediumIntensity = Template.bind({});
MediumIntensity.args = {
  intensity: 'medium',
  children: 'This is a medium intensity warning.',
};

export const HighIntensity = Template.bind({});
HighIntensity.args = {
  intensity: 'high',
  children: 'This is a high intensity warning ddddddddddd dddddddddddddd ddddddddddddddddd ddddddddddddd dddddddddddd dddddddddddddd dddddddddddddddddd ddddddddddddddd ddddddddddddd',
};
