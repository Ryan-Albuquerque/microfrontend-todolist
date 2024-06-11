import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../src/components/TodoItem';

describe('TodoItem component', () => {
  const todo = { id: 1, description: 'Test todo', completed: false };
  const toggleTodo = jest.fn();

  test('renders todo item with correct text and style', () => {
    const { getByText } = render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
    const todoItem = getByText(todo.description);

    expect(todoItem).toBeInTheDocument();
    expect(todoItem).toHaveStyle({ textDecoration: 'none' });
  });

  test('calls toggleTodo function when clicked', () => {
    const { getByText } = render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
    const todoItem = getByText(todo.description);

    fireEvent.click(todoItem);
    expect(toggleTodo).toHaveBeenCalledWith(todo.id);
  });
});
