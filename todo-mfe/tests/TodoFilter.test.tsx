import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoFilter from '../src/components/TodoFilter';

describe('TodoFilter component', () => {
  test('renders filter buttons correctly', () => {
    render(<TodoFilter filter="all" setFilter={() => {}} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  test('disables buttons correctly based on current filter', () => {
    render(<TodoFilter filter="all" setFilter={() => {}} />);
    const allButton = screen.getByText('All');
    const activeButton = screen.getByText('Active');
    const completedButton = screen.getByText('Completed');
    
    expect(allButton).toHaveAttribute('disabled');
    expect(activeButton).not.toHaveAttribute('disabled');
    expect(completedButton).not.toHaveAttribute('disabled');
  });
});
