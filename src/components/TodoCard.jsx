import React from 'react';

export default function TodoCard(props) {
  return (
    <li className="todoItem">
      {props.children}
      <div className='actionsContainer'>
        <button onClick={()=>props.handleEditTodo(props.index)}><i className="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=>props.handleDeleteTodo(props.index)}><i className="fa-solid fa-trash"></i></button>
      </div>
    </li>
  );
}

