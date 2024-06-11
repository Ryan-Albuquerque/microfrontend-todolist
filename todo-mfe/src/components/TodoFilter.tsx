import React from 'react';

interface TodoFilterProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        All
      </button>
      <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
        Active
      </button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
