import { useState } from "react";

export default function TodoInput(props) {
  // Initialize with an empty string

  return (
    <header>
      <input
        value={props.todoValue}
        onChange={(e) => {
          props.setTodoValue(e.target.value);
        }}
        placeholder="Enter todo....."
      />
      <button
        onClick={() => {
          props.handleAddTodos(props.todoValue);
          props.setTodoValue(""); // Clear the input field after adding
        }}
      >
        Add
      </button>
    </header>
  );
}
