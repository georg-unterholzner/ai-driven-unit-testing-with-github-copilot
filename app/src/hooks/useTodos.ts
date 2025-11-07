import { useState, useEffect } from 'react';
import type { Todo } from '../types/todo';
import { loadTodos, saveTodos } from '../utils/localStorage';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Initialize state with data from localStorage
    return loadTodos();
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: `${Date.now()}-${Math.random()}`,
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
