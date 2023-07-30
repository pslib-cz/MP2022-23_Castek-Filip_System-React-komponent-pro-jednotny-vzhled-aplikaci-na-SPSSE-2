// Grid.stories.js
import React from 'react';
import Grid from './Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
};

export const Default = () => (
  <Grid
    rows={["1fr", "3fr", "2fr", "1fr", "1fr"]}
    columns={["1fr", "2fr", "1fr", "3fr"]}
    rowGap={0}
    columnGap={10}
    borders="solid"
  >
    <div>
      Content 1
      <div>Content 3</div>
      <div>Content 4</div>
    </div>
    <div>Content 2</div>
    <div style={{ gridArea: '1 / 1 / 2 / 2', backgroundColor: 'red' }}>Grid Window 1</div>
    <div style={{ gridArea: '2 / 2 / 3 / 3', backgroundColor: 'blue' }}>Grid Window 2</div>
    <div>Content 5</div>
    <div>Fill</div>
    <div>fill</div>
    <div>Fill</div>
    <div>Fill</div>
    <div>Fill</div>
    <div>Fill</div>
    <div style={{ gridArea: '4 / 1 / 4 / 4', backgroundColor: 'orange' }}>mark 4</div>
    <div style={{ gridArea: '4 / 4 / 4 / 4', backgroundColor: 'green' }}>mark 3</div>
    <div style={{ gridArea: '3 / 3 / 4 / 4', backgroundColor: 'yellow' }}>mark 4</div>
  </Grid>
);
