// src/ProfilePicture.stories.js

import React from 'react';
import ProfilePicture from './ProfilePicture';

export default {
  title: 'Content/ProfilePicture',
  component: ProfilePicture,
};

const Template = (args) => <ProfilePicture {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: 'https://via.placeholder.com/200', // Default image URL
  size: 'medium', // Default size
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small', // Small size
};

export const Big = Template.bind({});
Big.args = {
  ...Default.args,
  size: 'big', // Big size
};
