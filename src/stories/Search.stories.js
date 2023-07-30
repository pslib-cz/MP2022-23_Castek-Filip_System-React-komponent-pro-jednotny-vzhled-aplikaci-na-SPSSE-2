// komponenta Search - storka

import React from 'react';
import Search from './Search';

export default {
  title: 'Form/Search',
  component: Search,
};

const sampleData = ['apple', 'banana', 'orange', 'pear']; // Define sample data

const Template = (args) => <Search {...args} />;

// Our default story uses the sampleData defined above
export const Default = Template.bind({});
Default.args = {
  children: sampleData,
};

// Additional story using custom data
export const CustomData = Template.bind({});
CustomData.args = {
  children: ['dog', 'cat', 'fish', 'bird', ' další zajímavé věci'], // You can pass different search data here
};

