import { useState, useMemo } from 'react';
import './App.css';
import { useTodos } from './hooks/useTodos';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterButtons } from './components/FilterButtons';
import type { FilterType } from './types/todo';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>
      <main className="app-main">
        <TodoInput onAdd={addTodo} />
        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;
