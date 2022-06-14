import React, { lazy, Suspense } from 'react';

const LazyFertigationPlan = lazy(() => import('./FertigationPlan'));

const FertigationPlan = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFertigationPlan {...props} />
  </Suspense>
);

export default FertigationPlan;
