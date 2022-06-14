import React, { lazy, Suspense } from 'react';

const LazyViewFertigationPlan = lazy(() => import('./ViewFertigationPlan'));

const ViewFertigationPlan = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewFertigationPlan {...props} />
  </Suspense>
);

export default ViewFertigationPlan;
