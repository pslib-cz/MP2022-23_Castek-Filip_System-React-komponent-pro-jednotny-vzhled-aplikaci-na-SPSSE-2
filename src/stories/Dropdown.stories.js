/*
    komponenty - formulářové prvky - výběrové menu (story)
*/

import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
};

export const Default = () => {
  const [selectedOption, setSelectedOption] = React.useState('');

  return (
    <Dropdown
      content={selectedOption}
      onSelect={(value) => setSelectedOption(value)}
    />
  );
};
