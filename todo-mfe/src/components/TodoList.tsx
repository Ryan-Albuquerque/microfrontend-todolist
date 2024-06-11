import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import { Todo } from '../types';

const TodoList: React.FC = () => {  
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (description: string) => {
    const newTodo = { id: Date.now(), description, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <input
        type="text"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            addTodo(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
        placeholder="Add a new todo"
      />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
