import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../src/components/TodoList';

describe('TodoList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders todo list correctly', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    expect(inputElement).toBeInTheDocument();
  });

  test('adds a new todo correctly', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    const todoItem = screen.getByText('New Todo');
    expect(todoItem).toBeInTheDocument();
  });

  test('toggles todo completion correctly', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    const todoItem = screen.getByText('New Todo');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle({ textDecoration: 'line-through' });
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle({ textDecoration: 'line-through' });
  });

  test('filters todos correctly', () => {
    render(<TodoList />);
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    fireEvent.change(inputElement, { target: { value: 'Another Todo' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    const activeFilterButton = screen.getByText('Active');
    fireEvent.click(activeFilterButton);
    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(screen.getByText('Another Todo')).toBeInTheDocument();

    const completedFilterButton = screen.getByText('Completed');
    fireEvent.click(completedFilterButton);
    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
    expect(screen.queryByText('Another Todo')).not.toBeInTheDocument();

    const allFilterButton = screen.getByText('All');
    fireEvent.click(allFilterButton);
    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(screen.getByText('Another Todo')).toBeInTheDocument();
  });
});
