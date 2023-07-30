// Title.stories.js
import React from 'react';
import Title from './Title';

export default {
  title: 'TextFolder/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Level1 = Template.bind({});
Level1.args = {
  level: '1',
  children: 'Level 1 Title',
};

export const Level2 = Template.bind({});
Level2.args = {
  level: '2',
  children: 'Level 2 Title',
};

export const Level3 = Template.bind({});
Level3.args = {
  level: '3',
  children: 'Level 3 Title',
};

export const Level4 = Template.bind({});
Level4.args = {
  level: '4',
  children: 'Level 4 Title',
};
