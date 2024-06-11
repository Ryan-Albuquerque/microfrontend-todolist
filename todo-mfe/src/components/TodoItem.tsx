import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.description}
    </li>
  );
};

export default TodoItem;
