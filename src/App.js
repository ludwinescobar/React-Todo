import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaulTodos = [
  { text: 'Enviar informe', completed: true },
  { text: 'Hacer la compra', completed: false },
  { text: 'Llamar a cliente', completed: false },
  { text: 'Cita con el jefe', completed: false },
];

function App() {
  return (
    <React.Fragment>
        <TodoCounter TotalTodo={5} TodoCompletados={2} />
        <TodoSearch />
        
        <TodoList>
          {defaulTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} />
          ))}
          
        </TodoList>

        { <CreateTodoButton /> }
                    
      </React.Fragment>
  );
}




export default App;
