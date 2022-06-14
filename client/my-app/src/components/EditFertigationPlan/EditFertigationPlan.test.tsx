import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditFertigationPlan from './EditFertigationPlan';

describe('<EditFertigationPlan />', () => {
  test('it should mount', () => {
    render(<EditFertigationPlan />);
    
    const editFertigationPlan = screen.getByTestId('EditFertigationPlan');

    expect(editFertigationPlan).toBeInTheDocument();
  });
});