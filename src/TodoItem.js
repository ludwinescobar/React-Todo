import './TodoItem.css';

function TodoItem(props){
    return (
   
      <li className="TodoItem">
        {/* This span will show a checkmark if the todo item is completed */}
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
        {/* This paragraph will show the text of the todo item */}
        {/* If the todo item is completed, it will have a line through it */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        {/* This span will show a delete icon for each todo item */}
        <span className="Icon Icon-delete">X</span>
      </li>
    );
  }

  export { TodoItem }