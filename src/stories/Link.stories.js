import React from 'react';
import Link from './Link';

export default {
  title: 'Textfolder/Link',
  component: Link,
};

export const Default = () => (
  <Link href="https://example.com" style={{ textDecoration: 'underline', color: '#357BC2' }}>
    This is a link with underline style to example website
  </Link>
);

