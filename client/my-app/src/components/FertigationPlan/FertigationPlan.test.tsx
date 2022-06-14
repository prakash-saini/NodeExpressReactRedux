import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FertigationPlan from './FertigationPlan';

describe('<FertigationPlan />', () => {
  test('it should mount', () => {
    render(<FertigationPlan />);
    
    const fertigationPlan = screen.getByTestId('FertigationPlan');

    expect(fertigationPlan).toBeInTheDocument();
  });
});