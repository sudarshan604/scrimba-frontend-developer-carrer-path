import React from "react";

function TodoItem(prop) {
  return (
    <div className="todo-items">
      <input
        onChange={prop.handleChange(prop.key)}
        type="checkbox"
        checked={prop.todo.completed}
      />
      <p>{prop.todo.text}</p>
    </div>
  );
}

export default TodoItem;
