import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">
        <TodoCounter TotalTodo={5} TodoCompletados={2} />
        <TodoSearch />
        
        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>

        { <CreateTodoButton /> }
                    
      </div>
  );
}




export default App;
