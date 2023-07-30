// Box.stories.js
import React from 'react';
import Box from './Box';
import Text from './Text';
import Title from './Title';
import Paragraph from './Paragraph';

export default {
  title: 'Layout/Box',
  component: Box,
};

export const Default = () => (
    <Box
      vertical="center"
      horizontal="center"
      border="none"
      space="medium"
      bg="white"
      direction="column"
     >
        <>
            <Box
                vertical="center"
                horizontal="right"
                border="solid"
                space="medium"
                bg="white"
                >
                    <Text>Obsah kontejneru</Text>
                    normální obsah
                    <Title level="1">nadpisek 1</Title>
                    <Title level="4">nadpisek 4</Title>
                    <Paragraph>
                        <Text>Obsah Paragraph</Text>
                        normální obsah
                        <Title level="2">nadpisek 2</Title>
                        <Title level="3">nadpisek 3</Title>
                    </Paragraph>
            </Box>
            <Box vertical="center" horizontal="right" border="solid" space="medium" bg="gray" direction="row" justify="space-between" align="center">
                normální obsah
            </Box>
        </>
    </Box>
  );
  
  export const SecondBox = () => (
    <Box
      vertical="center"
      horizontal="right"
      border="solid"
      space="medium"
      bg="gray"
      direction="row"
      justify="space-between"
      align="center"
    >
      normální obsah
    </Box>
  );
  
