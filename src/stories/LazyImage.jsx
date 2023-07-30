import React, { lazy } from 'react';

const LazyImage = lazy(() => import('./Image'));

export default LazyImage;