import React from 'react';
import Wrap from './Wrap';
import Page from './Page';
import Side from './Side';

export default {
  title: 'Layout/Wrap',
  component: Wrap,
};

export const SidePageSide = () => (
  <Wrap>
    <Side>Side Content 1</Side>
    <Page>Main Content</Page>
    <Side>Side Content 2</Side>
  </Wrap>
);

export const SidePage = () => (
  <Wrap>
    <Side>Side Content</Side>
    <Page>Main Content</Page>
  </Wrap>
);

export const PageSide = () => (
  <Wrap>
    <Page>Main Content</Page>
    <Side>Side Content</Side>
  </Wrap>
);

export const OnlyPage = () => (
  <Wrap>
    <Page>Main Content</Page>
  </Wrap>
);
