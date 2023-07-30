// src/DatePicker.stories.js

import React from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Form/DatePicker',
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

// Default story with empty inputs
export const Default = Template.bind({});

// Story with invalid inputs
export const InvalidInputs = Template.bind({});
InvalidInputs.args = {
  day: '35', // Invalid day (should be between 1 and 31)
  month: '13', // Invalid month (should be between 1 and 12)
  year: '20000', // Invalid year (should be between 1900 and 2100)
};

// Story with valid inputs
export const ValidInputs = Template.bind({});
ValidInputs.args = {
  day: '25',
  month: '8',
  year: '2023',
};
