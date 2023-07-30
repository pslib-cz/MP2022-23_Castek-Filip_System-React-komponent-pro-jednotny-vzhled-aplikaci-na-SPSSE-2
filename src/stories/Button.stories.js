/*
    komponenty - formulářové prvky - tlačítko (storybook)
*/

import React from 'react';
import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
};

export const Default = () => (
  <Button
    onClick={() => alert('zmáčknutý')}
    text="Příklad tlačítka"
  />
);

export const Large = () => (
  <Button
  onClick={() => alert('zmáčknuto')}
  text="velké tlačítko"
  size="large"
  />
);

export const LargeDisabled = () => (
  <Button
    onClick={() => alert('zmáčknuto')}
    text="velký vypnuté tlačítko"
    size="large"
    disabled
  />
);
