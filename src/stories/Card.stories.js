// Card.stories.js
import React from 'react';
import Card from './Card';
import Image from './Image';

export default {
  title: 'Structures/Card',
  component: Card,
};

export const SmallCard = () => (
  <Card size="small" topMsg="Top Message" botMsg="Bottom Message">
    <h3>Small Card</h3>
    <p>This is a small card component.</p>
  </Card>
);

export const MediumCard = () => (
  <Card size="medium" topMsg="Top Message" botMsg="Bottom Message">
    <Image src="https://via.placeholder.com/400x200" markup="Image markup for card" />
  </Card>
);

export const LargeCard = () => (
  <Card size="large" topMsg="Top Message" botMsg="Bottom Message">
    <h1>Large Card</h1>
    <p>This is a large card component.</p>
  </Card>
);
