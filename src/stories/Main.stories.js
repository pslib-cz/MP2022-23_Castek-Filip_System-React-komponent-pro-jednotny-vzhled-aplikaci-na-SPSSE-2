import React from 'react';
import Main from './Main';

export default {
  title: 'Layout/Main',
  component: Main,
};

export const Default = () => (
  <Main>
    <h1>Welcome to our website!</h1>
    <p>This is some example content.</p>
    {/* Add any other content you want here */}
  </Main>
);
