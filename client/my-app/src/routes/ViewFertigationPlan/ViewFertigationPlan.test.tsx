import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewFertigationPlan from './ViewFertigationPlan';

describe('<ViewFertigationPlan />', () => {
  test('it should mount', () => {
    render(<ViewFertigationPlan />);
    
    const viewFertigationPlan = screen.getByTestId('ViewFertigationPlan');

    expect(viewFertigationPlan).toBeInTheDocument();
  });
});