import React from 'react';

function TodoCounter({ TotalTodo, TodoCompletados }) {
  return (
    <h1>Has completado {TodoCompletados} de {TotalTodo} TODOs</h1>
  );
}

export { TodoCounter };