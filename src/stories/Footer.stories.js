import React from 'react';
import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
};

export const Default = () => (
  <Footer
    leftContent="Vytvořeno jako MP"
    centerContent="Copyright © 2023 Castek solo"
    rightContent="Vytvořeno v roce 2023"
  />
);
