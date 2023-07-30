// Paragraph.stories.js
import React from 'react';
import Paragraph from './Paragraph';
import Text from './Text';
import Title from './Title';
import Link from './Link';
import Warning from './Warning';

export default {
  title: 'TextFolder/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Title level="2" size="medium">
        This is a medium-sized Title inside the paragraph.
      </Title>
      <Text size="medium">
        This is some medium text <Link href="https://pslib.cz/">link na pslib</Link> inside the paragraph.
      </Text>
      <Warning intensity="high"> Pozor! </Warning>
    </>
  ),
};
