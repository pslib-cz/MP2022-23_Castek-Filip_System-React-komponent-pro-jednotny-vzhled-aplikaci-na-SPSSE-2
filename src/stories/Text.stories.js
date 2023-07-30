// Text.stories.js
import React from 'react';
import Text from './Text';

export default {
  title: 'TextFolder/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Big = Template.bind({});
Big.args = {
  size: 'big',
  children: <strong>This is a bold text</strong>,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: (
    <>
      This is a <em>medium</em> text with multiple elements.
    </>
  ),
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small Text',
};
