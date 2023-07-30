/*
    komponenty - formulářové prvky - checkbox (story)
*/
import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
};

export const Default = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return <Checkbox checked={isChecked} onChange={handleChange} />;
};
