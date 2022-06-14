import React, { lazy, Suspense } from 'react';

const LazyEditFertigationPlan = lazy(() => import('./EditFertigationPlan'));

const EditFertigationPlan = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEditFertigationPlan {...props} />
  </Suspense>
);

export default EditFertigationPlan;
