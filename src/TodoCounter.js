import React from 'react';
import PropTypes from 'prop-types';
import './TodoCounter.css';

function TodoCounter({ TotalTodo, TodoCompletados }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{TodoCompletados}</span> de <span>{TotalTodo}</span> TODOs
    </h1>
  );
}

TodoCounter.propTypes = {
  TotalTodo: PropTypes.number.isRequired,
  TodoCompletados: PropTypes.number.isRequired,
};


export { TodoCounter };