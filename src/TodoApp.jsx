// Challenge 9 - 10
import React, { useState } from 'react';
import { useTodo } from './useTodo'; // Asegúrate de que la ruta sea correcta

export const TodoApp = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos } = useTodo([{
    id: 1,
    description: 'Hacer Challenges...',
    done: false
  }]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim().length <= 0) return;
    addTodo({
      id: new Date().getTime(),
      description: newTodo,
      done: false
    });
    setNewTodo('');
  };

  return (
    <>
      <h1>Lista de tareas ({countTodos()})</h1>
      <small>Pendientes: {countPendingTodos()}</small>
      <hr />

      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              <span onClick={() => toggleTodo(todo.id)}>
                {todo.description}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">
          Agregar TODO
        </button>
      </form>
    </>
  );
};
