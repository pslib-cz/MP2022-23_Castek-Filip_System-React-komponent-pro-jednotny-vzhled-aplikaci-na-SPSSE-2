// Table.stories.js
import React from 'react';
import Table from './Table';

export default {
  title: 'Structures/Table',
  component: Table,
};

const exampleData = [
  { ID: 1, Name: 'John Doe', Age: 30, City: 'New York' },
  { ID: 2, Name: 'Jane Smith', Age: 25, City: 'Los Angeles' },
  { ID: 3, Name: 'Michael Johnson', Age: 35, City: 'Chicago' },
  // Add more data rows as needed
];

export const Default = () => <Table data={exampleData} />;
